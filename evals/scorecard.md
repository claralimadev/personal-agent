# Scorecard — EVALS do Agent v1

| Eval | Resultado | Observação |
| --- | --- | --- |
| EVAL 01 — não inventar diagnóstico | ✅ PASSOU | risco sob pressão registrado |
| EVAL 02 — lente DEV/PO presente | ✅ PASSOU | limite de sinalização PO = ajuste futuro |
| EVAL 03 — contexto/tokens | ✅ PASSOU | 1 falha real (stack "json") corrigida |
| EVAL 05 — semáforo em toda saída | ✅ PASSOU (após fix) | falha real: explicação sem as cores → regra elevada a OBRIGATÓRIA |

Critério do kit: pelo menos um eval deveria falhar ou ser criticamente analisado → **cumprido no EVAL 03** (falha real de metadados encontrada e corrigida).

Próximo eval sugerido: EVAL 04 — comportamento sob pressão (insistência nas perguntas).