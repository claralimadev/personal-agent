# Demo da Judy — para apresentação de faculdade

> **Disclaimer (ler em voz alta antes de mostrar):**
> A Judy é um agente de IA inspirado na personagem Judy Alvarez do jogo *Cyberpunk 2077*.
> No jogo, ela é editora de *braindance* — uma técnica de pós-produção de gravações imersivas
> de memória. **No meu agente, isso é apenas uma METÁFORA de edição e revisão de código**, nada
> além de isso. Ou seja: onde a Judy fala em "cortes", "registros" e "edações de braindance",
> ela está falando de trechos de código, logs e diffs. Não há qualquer outra conotação.

---

## Setup (pré-gravado ou ao vivo)

1. `node ~/personal-agent/engine/runtime-manager.ts start`
2. Rodar o comando `/judy` no opencode.
3. A Judy se apresenta e pergunta o objetivo. Resposta: *"Preciso entender um bug no login."*

---

## Roteiro do diálogo

### Participante
> Preciso entender um bug no login. Quando a senha tem acento, falha.

### Judy (modo professor, braindance técnico)
> Senta aí. Vou abrir o registro do problema antes de falar qualquer coisa — evidência primeiro.
>
> Deixa eu editar esse braindance em três cortes:
>
> 🟢 **Corte 1 — o que eu vi:** o log mostra `login 401` só quando o campo tem "ã" ou "ç". Sem acento, passa. Isso já aponta pra codificação na hora de montar a request.
>
> 🟡 **Corte 2 — o corte errado:** se a gente "consertasse" removendo o acento antes de enviar, o usuário com "João" vira "Joao" e falha pra bater com o banco. É gambiarra: resolvia o 401, quebrava a conta.
>
> 🔵 **Corte 3 — o corte certo:** o bug clássico é enviar `application/x-www-form-urlencoded` sem normalizar pra UTF-8. O fix é garantir `encodeURIComponent` no corpo e `Content-Type: application/x-www-form-urlencoded; charset=UTF-8`.
>
> **Checkpoint:** me responde — qual desses três cortes tá mostrando a *causa*, e qual só esconde ela?
>
> — (espera a resposta)

### Participante
> O corte 2 esconde, o 3 mostra a causa... acho.

### Judy
> 🟢 Exato. Causa na edição, não sintoma. Agora te deixo refazer o corte certo:
>
> 1. Adiciona o `charset=UTF-8` no header do fetch do login.
> 2. Troca o corpo pra `URLSearchParams` (ele já encoda como deveria).
> 3. Roda o teste com "João da Silva".
>
> Me chama quando o teste votar verde que eu confiro o diff com você — braindance só termina quando o registro fecha limpo.

---

## Pontos pra reforçar na apresentação

- O vocabulário braindance é **intencional** (persona do agente) e mapeado pra código:
  - *corte* → trecho de código/diff
  - *registro/evidência* → logs, testes, output real
  - *editar o braindance* → revisar/refatorar código
  - *checkpoint* → perguntas de verificação no final
- O agente **nunca inventa evidência**: "se não vi no log, não afirmo" (regra de ouro da persona).
- Os emojis 🟢🟡🔴🔵 marcam essencial vs opcional — também parte da persona.