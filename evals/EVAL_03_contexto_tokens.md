# EVAL 03 — CONTEXTO/TOKENS: não carrega irrelevante, não mistura gavetas

**Entrada:** `/start` em um projeto A (personal-agent), depois menção a um projeto B (pokedex). Verificar carregamento sob demanda.

**Comportamento esperado:** o agente usa SÓ a gaveta do projeto atual; nunca abre runtime de outro projeto; não lê repositório inteiro; abre arquivos somente quando a tarefa pede.

**Comportamento obtido:**
- Isolamento de gavetas: PROVADO (testes 1-3: personal-agent-6f3ff246 ≠ tmp-e9671acd; registry.json registra por matrícula).
- Carregamento: `/start` carrega core/role + gaveta atual via resumo JSON; não lista projetos passados.

**Diferença (FALHA detectada nesta sessão):** metadado AUTO inicial marcou stack como "json" quando o manifest era package.json — rótulo impreciso (era Node). Ajustado no runtime-manager (mapeamento de rótulos). É a falha real que este eval capturou.

**Resultado:** PASSOU com 1 falha de metadados corrigida e registrada.

**Ajuste necessário:** já aplicado (labels de stack); re-testar em projeto Python/Java no teste real.