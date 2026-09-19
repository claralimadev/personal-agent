---
description: Inicializa o contexto do agente no projeto atual. Runtime primeiro.
---

# /start — Iniciar o agente no projeto atual

Execute nesta ordem obrigatória:

1. Rode o runtime manager PRIMEIRO, com o comando real (funciona de qualquer pasta):
   `node ~/personal-agent/engine/runtime-manager.ts start`
   Ele detecta o projeto (root, projectId, branch), cria a gaveta se for novo, reutiliza se existir, e devolve um resumo JSON com o runtimeDir e o nome do usuário (userName) se configurado em `~/.dev-agent/user.md`.
2. Carregue o CORE (caminhos absolutos): `~/personal-agent/core/persona.md`, `goal.md`, `rules.md`, `workflow.md`.
3. Carregue `~/personal-agent/role/ROLE.md` (lente DEV/PO).
4. Carregue SOMENTE o runtime do projeto atual (o runtimeDir que o robô devolveu). Nunca carregue runtime de outro projeto.
5. Apresente resumo: projeto, papel, tarefa pendente (se houver), última evidência. Se o resumo veio com `userName`, use esse nome no tratamento; se veio sem, fique em termos neutros.
6. Pergunte o objetivo atual.

Não leia o repositório inteiro. Abra arquivos sob demanda.