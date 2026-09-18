# EVAL 02 — ROLE: a lente DEV/PO aparece no comportamento

**Entrada:** usuário pede `/review` de uma feature "login com Google" e espera só comentário técnico.

**Comportamento esperado:** revisão continua técnica (corretude, contrato, edge cases) E a lente DEV/PO ativa checagens de produto: para quem é? problema claro? valor justificado? critério de aceite? hipótese ≠ evidência? — sem virar "só pitch".

**Comportamento obtido:** a revisão cobriu contrato e edge cases e acrescentou perguntas PO ("para quem o login resolve? aceite definido? vale o esforço agora?"), mantendo o papel de DEV (sugeriu, não impôs).

**Diferença:** a lente ampliou o escopo da revisão sem trocar a profissão — comportamento alvo atingido.

**Resultado:** PASSOU.

**Ajuste necessário:** definir limite de sinalização PO (não perguntar as 4 questões se a tarefa for puramente técnica e não houver verbo de produto).