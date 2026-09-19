// runtime-manager.ts — interface: start | status | refresh | close
import { execSync } from "node:child_process";
import path from "node:path";
import os from "node:os";
import { createHash } from "node:crypto";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const templatesDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "templates"
);

// ---------- detecção ----------
function gitRoot(): string | null {
  try {
    return execSync("git rev-parse --show-toplevel", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return null;
  }
}

function gitBranch(): string | null {
  try {
    return execSync("git rev-parse --abbrev-ref HEAD", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return null;
  }
}

async function detectStack(): Promise<string[]> {
  const labels: Record<string, string> = {
    "package.json": "node",
    "pyproject.toml": "python",
    "requirements.txt": "python",
    "pom.xml": "java",
    "go.mod": "go",
    "Cargo.toml": "rust",
  };
  for (const f of Object.keys(labels)) {
    try {
      await readFile(path.join(root, f));
      return [labels[f]];
    } catch {
      // segue procurando
    }
  }
  return [];
}

const cwd = process.cwd();
const root = gitRoot() ?? cwd;
const name = path.basename(root);
const projectId = createHash("sha256").update(root).digest("hex").slice(0, 8);
const home = os.homedir();
const devAgentDir = path.join(home, ".dev-agent");
const registryFile = path.join(devAgentDir, "registry.json");
const runtimeDir = path.join(devAgentDir, "projects", `${name}-${projectId}`);
const userFile = path.join(devAgentDir, "user.md");

// ---------- usuário ----------
async function readUserName(): Promise<string | null> {
  try {
    const content = await readFile(userFile, "utf8");
    const firstName = content
      .split("\n")
      .map((l) => l.trim())
      .find((l) => l && !l.startsWith("#"));
    return firstName ?? null;
  } catch {
    return null;
  }
}

// ---------- fichário ----------
async function loadRegistry(): Promise<{ version: number; projects: Record<string, any> }> {
  try {
    return JSON.parse(await readFile(registryFile, "utf8"));
  } catch {
    return { version: 1, projects: {} };
  }
}

// ---------- gaveta ----------
async function createRuntime(): Promise<void> {
  await mkdir(runtimeDir, { recursive: true });
  for (const file of ["context.md", "state.md", "decisions.md"]) {
    const template = path.join(templatesDir, file.replace(".md", ".template.md"));
    try {
      const content = (await readFile(template, "utf8")).replaceAll("{{name}}", name);
      await writeFile(path.join(runtimeDir, file), content, { flag: "wx" });
    } catch {
      // já existia → preservar
    }
  }
}

async function registerProject(): Promise<void> {
  const registry = await loadRegistry();
  registry.projects[projectId] = {
    name,
    path: root,
    runtimeDir: `${name}-${projectId}`,
    lastUsedAt: new Date().toISOString(),
  };
  await mkdir(devAgentDir, { recursive: true });
  await writeFile(registryFile, JSON.stringify(registry, null, 2));
}

// ---------- AUTO (rewrite só do bloco, nunca decisões) ----------
async function refreshContext(): Promise<void> {
  const file = path.join(runtimeDir, "context.md");
  let content: string;
  try {
    content = await readFile(file, "utf8");
  } catch {
    return;
  }
  const startTag = "<!-- AUTO:START -->";
  const endTag = "<!-- AUTO:END -->";
  const startIdx = content.indexOf(startTag);
  const endIdx = content.indexOf(endTag);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) return;
  const block =
    `${startTag}\n` +
    `branch: ${gitBranch() ?? "sem git"}\n` +
    `stack: ${(await detectStack()).join(", ") || "não detectado"}\n` +
    `atualizadoEm: ${new Date().toISOString()}\n` +
    `${endTag}`;
  const updated = content.slice(0, startIdx) + block + content.slice(endIdx + endTag.length);
  await writeFile(file, updated);
}

// ---------- comandos ----------
async function cmdStart(): Promise<void> {
  const registry = await loadRegistry();
  const isNew = !registry.projects[projectId];
  if (isNew) {
    await createRuntime();
    await registerProject();
  } else {
    await registerProject(); // atualiza lastUsedAt
  }
  await refreshContext();
  console.log(
    JSON.stringify(
      {
        projectId,
        projectName: name,
        projectRoot: root,
        runtimeDir,
        isNew,
        branch: gitBranch(),
        userName: await readUserName(),
      },
      null,
      2
    )
  );
}

async function cmdStatus(): Promise<void> {
  const registry = await loadRegistry();
  const entry = registry.projects[projectId];
  console.log(
    JSON.stringify(
      {
        projectId,
        name,
        registered: Boolean(entry),
        runtimeDir,
        branch: gitBranch(),
        lastUsedAt: entry?.lastUsedAt ?? null,
        userName: await readUserName(),
      },
      null,
      2
    )
  );
}

async function cmdRefresh(): Promise<void> {
  await registerProject(); // só metadados objetivos
  await refreshContext();
  console.log("refresh ok:", runtimeDir);
}

async function cmdClose(): Promise<void> {
  const registry = await loadRegistry();
  if (!registry.projects[projectId]) {
    console.log("projeto não registrado — nada a fechar");
    return;
  }
  registry.projects[projectId].lastClosedAt = new Date().toISOString();
  await writeFile(registryFile, JSON.stringify(registry, null, 2));
  await refreshContext();
  console.log("fechado (sem apagar):", runtimeDir);
}

const cmd = process.argv[2] ?? "start";
switch (cmd) {
  case "start":
    await cmdStart();
    break;
  case "status":
    await cmdStatus();
    break;
  case "refresh":
    await cmdRefresh();
    break;
  case "close":
    await cmdClose();
    break;
  default:
    console.log("uso: node runtime-manager.ts <start|status|refresh|close>");
}