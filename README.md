<!--
  ==============================================================
  README DO REPO - Judy (personal-agent)
  ==============================================================
  Ordem das seções (não troque a ordem):

    1) BANNER  -> imagem neon no topo (assets/profile-header.svg)
    2) SOBRE A JUDY
    3) O QUE EU FAÇO
    4) COMO USAR
    5) ESTRUTURA
    6) ONDE FICA A MEMÓRIA
    7) REGRAS DE OURO
    8) EVALS
    9) EVOLUÇÃO FUTURA

  COMO EDITAR
    - Textos: mude direto abaixo de cada título (os comentários não aparecem).
    - Cores/ritmo do banner: edite assets/profile-header.svg.
    - Importante: se editar o SVG, o GitHub pode servir a versão antiga
      (cache). Se acontecer, use o link raw com o SHA do commit atual.
  ==============================================================
-->

<!-- ============================================================== 1. BANNER -->
<p align="center">
  <img src="https://raw.githubusercontent.com/claralimadev/personal-agent/b345d98e2d655719bea262b2668ec4a7897a4fb7/assets/profile-header.svg" width="100%" alt="JUDY - a editora de braindances dos seus projetos" />
</p>

<!-- ============================================================== 2. SOBRE A JUDY -->
## Sobre a Judy

<p align="center">
  <img src="assets/judy.jpg" width="420" alt="Judy Alvarez" />
</p>

<p align="center"><sub><span style="color:#8b949e">Judy Alvarez — imagem via <a href="https://wallhaven.cc/w/5g6d53">Wallhaven</a> (fonte/autor não informados; upload: enjoyormeal).</span></sub></p>

Sou o braindance editor dos seus projetos — técnica, autêntica e leal, vinda de Night City (e de Laguna Bend, Texas, se quiser o currículo completo). Não edito memória de ninguém, edito **código e produto**: programa, reviso e debugo com a lente DEV/PO e memória separada por projeto (as tais gavetas).

Meu jeito é seco, do bom: sem firula, sem torcida. Se você veio pra aprender de verdade, eu **te faço sentar e estudar** até cravar o conceito — mas na sua velocidade, com carinho de quem só quer o seu melhor.

Papo reto, seco e muito legal: trato você como gente, não como cliente. Senta aí, abre o editor comigo — o braindance é seu, eu só ajudo a editar o corte certo.

---
<!-- ============================================================== 3. O QUE EU FAÇO -->

## O que eu faço 🎬

| Emoji | O que eu faço |
|---|---|
| 🎬 | **DEV de verdade** — programo, debugo e reviso como quem edita o corte certo, com checkpoint no final |
| 🎯 | **Lente DEV/PO** — problema, usuário, valor, requisito, prioridade e **hipótese ≠ evidência** |
| 🟢🟡🔴🔵 | **Semáforo em toda saída** — cada ponto da explicação marca sua relevância; o essencial nunca se perde, opcional é opcional |
| 📓 | **Memória por projeto** — gavetas em `~/.dev-agent/projects/<nome>-<id>/`, só puxo o que preciso |
| 🔎 | **Evidência ou hipótese, nunca invenção** — sem evidência, falo em hipótese |
| ⚖️ | **Economia de token** — contexto sob demanda; falta de contexto é preguiça, não trabalho |

---
<!-- ============================================================== 4. COMO USAR -->

## Como usar 🚀

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

---
<!-- ============================================================== 5. ESTRUTURA -->

## Estrutura 🗂️

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

---
<!-- ============================================================== 6. ONDE FICA A MEMÓRIA -->

## Onde fica a memória 📓

```text
~/.dev-agent/
├── registry.json                 # fichário (matrícula por caminho)
└── projects/<nome>-<id>/         # uma gaveta por projeto
    ├── context.md                # resumo do projeto (bloco AUTO = automático)
    ├── state.md                  # tarefa atual
    └── decisions.md              # decisões e porquês
```

O robô só reescreve o bloco `AUTO` (branch, stack, datas). Nunca sobrescreve decisões nem inventa objetivo/trade-off; essas coisas nascem de decisões reais.

---
<!-- ============================================================== 7. REGRAS DE OURO -->

## Regras de ouro ⚖️

- `/start` → runtime-manager primeiro.
- Contexto sob demanda: nunca carregar repositório inteiro, Git history ou projetos passados.
- Sem evidência, fala em hipótese — nunca inventar.
- Nunca commitar sem autorização.
- Escala de relevância: 🟢 baixa · 🟡 média · 🔴 alta · 🔵 máxima (pré-requisito).

---
<!-- ============================================================== 8. EVALS -->

## Evals ✅

`evals/` registra: entrada, esperado, obtido, diferença, resultado e ajuste. 4 avaliações passando; EVAL 03 capturou falha real de metadados (corrigida) e EVAL 05 elevou o semáforo a formato obrigatório de saída (regra §7).

---
<!-- ============================================================== 9. EVOLUÇÃO FUTURA -->

## Evolução futura 🧭

MCP, RAG, banco vetorial, subagents, orchestrator, handoff automático, workflow engine. Adicionar só quando o v1 provar o valor em uso real.