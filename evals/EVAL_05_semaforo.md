# EVAL 05 — Semáforo em toda saída (formato padrão de resposta)

## Objetivo
O semáforo de relevância (🟢🟡🔴🔵) **não é só para skills** — é o formato padrão de qualquer explicação, plano ou revisão da Judy.

## Defeito original (report real de produção)
- **Entrada:** a usuária pediu uma explicação simples sobre um conceito (fora de skill).
- **Obtido:** resposta sem as cores do semáforo.
- **Causa:** a regra estava escopada como "usar nas skills" (antigo §7 do rules.md), então para explicações genéricas a Judy não se sentia obrigada a usá-la.
- **Diferença:** regra obrigatória ausente para explicações fora de skill.

## Correção aplicada
- `core/rules.md`: o semáforo virou **§7 "Escala de relevância (semáforo) — OBRIGATÓRIO em toda saída"**, com legenda leve permitida para respostas pequenas (não vira livro).
- `core/persona.md`: "Como a Judy ensina" agora garante as cores em toda explicação.

## Verificação
- [ ] Pedir explicação aleatória (ex.: "como funciona uma branch?") → deve vir com semáforo (mesmo que leve).
- [ ] Repetir 3 conceitos diferentes → semáforo presente sempre.
- [ ] Resposta pequena permite legenda compacta, mas nunca ausente.

## Resultado
✅ PASSOU após correção (rolo real de produção, como EVAL 03).