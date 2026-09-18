# Judy — Agent v1 · DEV/PO pessoal

Seu agente pessoal de desenvolvimento, reutilizável em vários projetos, com lente de produto (DEV/PO). Nome escolhido por você: **Judy** (a editora de braindances de Night City — técnica, autêntica, leal). A persona foi temperada com a personalidade dela do jogo: craftsmanship, humor seco, papo reto e proteção total — sem quebrar as regras do agente (semáforo, evidência, VALIDAR, dois modos).

## Quem é a Judy

![Judy Alvarez](assets/judy.jpg)

<p align="center"><sub><span style="color:#8b949e">Judy Alvarez — imagem via <a href="https://wallhaven.cc/w/5g6d53">Wallhaven</a> (fonte/autor não informados; upload: enjoyormeal).</span></sub></p>

A Judy é o braindance editor dos seus projetos — técnica, autêntica e leal, vinda de Night City (e de Laguna Bend, Texas, se quiser o currículo completo). Ela não edita memória de ninguém, edita **código e produto**: programa, revisa e debuga com a lente DEV/PO e memória separada por projeto (as tais gavetas).

O jeito dela é seco, do bom: sem firula, sem torcida. Se você veio pra aprender de verdade, ela vai **te fazer sentar e estudar** até cravar o conceito — mas na sua velocidade, com carinho de quem só quer o seu melhor.

| Emoji | O que a Judy faz |
|---|---|
| 🎬 | **DEV de verdade** — programa, debuga e revisa como quem edita o corte certo, com checkpoint no final |
| 🎯 | **Lente DEV/PO** — problema, usuário, valor, requisito, prioridade e **hipótese ≠ evidência** |
| 🟢🟡🔴🔵 | **Semáforo em toda saída** — o essencial nunca se perde; opcional é opcional |
| 📓 | **Memória por projeto** — gavetas em `~/.dev-agent/projects/<nome>-<id>/`, só puxa o que precisa |
| 🔎 | **Evidência ou hipótese, nunca invenção** — sem evidência ela avisa que é chute |
| ⚖️ | **Economia de token** — contexto sob demanda; falta de contexto é preguiça, não trabalho |

Papo reto, seco e muito legal: ela te trata como gente, não como cliente. Senta aí, abre o editor com ela — o braindance é seu, ela só ajuda a editar o corte certo.

## Estrutura

```text
├── AGENTS.md
├── README.md
├── .opencode/command/      → /start /resume /plan /debug /review /status /eval
├── core/                   → persona · goal · rules · workflow (permanente)
├── role/ROLE.md            → lente DEV/PO (permanente)
├── skills/                 → coding · debugging · code-review · product-discovery
├── evals/                  → 4 evals + scorecard
├── engine/runtime-manager.ts → robô: start | status | refresh | close
├── templates/              → moldes de context/state/decisions
└── package.json
```

## Como usar

```text
npm run runtime -- start    # testar o robô direto
```

Dentro do OpenCode:

- `/judy` — invoca a Judy: runtime → core → role → gaveta do projeto → saudação → objetivo
- `/start` — processo completo sem a saudação temática
- `/resume` — retoma a tarefa salva no state
- `/plan` — planeja sem codar (checa os campos DEV/PO)
- `/debug` — caça bug por evidência
- `/review` — revisa com a lente DEV/PO
- `/status` — situação atual do projeto
- `/eval` — roda uma avaliação de comportamento

Os comandos estão instalados **globalmente** (`~/.config/opencode/command/`): funcionam em qualquer projeto — é só digitar `opencode` na pasta e chamar. Os originais vivem em `.opencode/command/`.

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

`evals/` registra: entrada, esperado, obtido, diferença, resultado e ajuste. 4 avaliações passando; EVAL 03 capturou falha real de metadados (corrigida) e EVAL 05 elevou o semáforo a formato obrigatório de saída (regra §7).