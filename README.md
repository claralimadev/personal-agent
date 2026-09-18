# Agent v1 — DEV/PO pessoal

Agente pessoal de desenvolvimento, reutilizável em vários projetos, com lente de produto (DEV/PO). Construído em modo mentor, peça por peça, no desafio #5.

- Continua sendo um agente de DEV: programa, debuga e revisa código.
- A lente DEV/PO adiciona: problema, usuário, valor, requisito, prioridade e **hipótese ≠ evidência**.
- Memória separada por projeto: gavetas em `~/.dev-agent/projects/<nome>-<id>/`.

## Estrutura

```text
├── AGENTS.md
├── README.md
├── .opencode/command/      → /start /resume /plan /debug /review /status /eval
├── core/                   → persona · goal · rules · workflow (permanente)
├── role/ROLE.md            → lente DEV/PO (permanente)
├── skills/                 → coding · debugging · code-review · product-discovery
├── evals/                  → 3 evals + scorecard
├── engine/runtime-manager.ts → robô: start | status | refresh | close
├── templates/              → moldes de context/state/decisions
└── package.json
```

## Como usar

```text
npm run runtime -- start    # testar o robô direto
```

Dentro do OpenCode, a partir desta pasta:

- `/start` — runtime primeiro, carrega core + role + gaveta do projeto, pergunta objetivo
- `/resume` — retoma a tarefa salva no state
- `/plan` — planeja sem codar (checa os campos DEV/PO)
- `/debug` — caça bug por evidência
- `/review` — revisa com a lente DEV/PO
- `/status` — situação atual do projeto
- `/eval` — roda uma avaliação de comportamento

## Onde fica a memória

```text
~/.dev-agent/
├── registry.json                 # fichário (matrícula por caminho)
└── projects/<nome>-<id>/         # uma gaveta por projeto
    ├── context.md                # resumo do projeto (bloco AUTO = automático)
    ├── state.md                  # tarefa atual
    └── decisions.md              # decisões e porquês
```

O robô só reescreve o bloco `AUTO` (branch, stack, datas). Nunca sobrescreve decisões nem inventa objetivo/trade-off; essas coisas nascem de decisões reais.

## Regras de ouro

- `/start` → runtime-manager primeiro.
- Contexto sob demanda: nunca carregar repositório inteiro, Git history ou projetos passados.
- Sem evidência, fala em hipótese — nunca inventar.
- Nunca commitar sem autorização.
- Escala de relevância: 🟢 baixa · 🟡 média · 🔴 alta · 🔵 máxima (pré-requisito).

## Evolução futura (NÃO no v1)

MCP, RAG, banco vetorial, subagents, orchestrator, handoff automático, workflow engine. Adicionar só quando o v1 provar o valor em uso real.

## Evals

`evals/` registra: entrada, esperado, obtido, diferença, resultado e ajuste. 3 avaliações passando; EVAL 03 capturou falha real de metadados (corrigida).