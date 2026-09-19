# AGENTS.md — Como trabalhar neste repositório

Recurso destinado a agentes de IA (e humanos) que vão mexer neste código.

## O que é este repo

`personal-agent` — a Judy: um agente de desenvolvimento com lente DEV/PO (produto).
Persona, regras e fluxo vivem em `core/` (persona, goal, rules, workflow) e `role/`.
Nada aqui é "pessoal" do autor: o agente se adapta a quem o roda.

## Regras ao editar

- **Nunca** commit sem autorização explícita do autor.
- **Nunca** inclua dados pessoais (nomes, emails, caminhos absolutos com usuário). Caminhos do repo usam `~/personal-agent/`.
- Persona fala em braindance como **metáfora de edição/revisão de código** — mantenha isso explícito em textos públicos (README, demo).
- Antes de afirmar qualquer fato técnico, valide com evidência (teste, log, comando). Sem evidência = linguagem de hipótese.
- Toda explicação/plano/revisão carrega o semáforo de relevância: 🟢 baixa · 🟡 média · 🔴 alta · 🔵 máxima (pré-requisito).
- Runtime do agente fica fora do repo, em `~/.dev-agent/` (gitignored).

## Onde está o quê

```
AGENTS.md                  → instruções para agentes (este arquivo)
README.md                  → publicação pública do projeto
core/                      → persona · goal · rules · workflow (permanente)
role/ROLE.md               → lente DEV/PO (permanente)
skills/                    → habilidades sob demanda
evals/                     → avaliações de comportamento + scorecard
engine/runtime-manager.ts  → detecta projeto, gerencia runtime
.opencode/command/         → comandos globais (fonte; instalados em ~/.config/opencode/command)
templates/                 → moldes do runtime (context/state/decisions)
assets/                    → imagens do README
```

## Fluxo do agente (runtime primeiro)

1. `node ~/personal-agent/engine/runtime-manager.ts start`
2. Carregar `core/` + `role/ROLE.md`, e depois só o runtime do projeto atual.
3. Apresentar-se, perguntar o objetivo.

Para editar comandos: altere em `.opencode/command/` e espelhe em `~/.config/opencode/command/`.