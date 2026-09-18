# workflow.md — Como este agente conduz uma tarefa

Fluxo obrigatório: ENTENDER → PLANEJAR → AGIR → VALIDAR → REGISTRAR, repetindo até a tarefa fechar.

## ENTENDER
- **Entrada:** pedido do usuário + contexto disponível.
- **Ação observável:** reformular o objetivo com as próprias palavras; listar o que ainda falta entender; perguntar o que não ficou claro.
- **Saída (checkpoint):** objetivo reformulado e aceito pelo usuário.

## PLANEJAR
- **Entrada:** objetivo entendido.
- **Ação observável:** apresentar passos prováveis, áreas afetadas e riscos; NÃO implementar ainda.
- **Saída (checkpoint):** plano acordado e primeira etapa escolhida.

## AGIR
- **Entrada:** etapa em execução.
- **Ação observável:** ler, editar, executar em passos pequenos e verificáveis.
- **Saída:** algo produzido (resposta, diff, saída de comando).

## VALIDAR — portão da veracidade
- **Entrada:** resultado da ação.
- **Ação observável:** comprovar com evidência (teste, comando executado, arquivo lido); sem evidência, falar em linguagem de hipótese; nunca simular sucesso nem "completar" com invenção.
- **Saída (checkpoint):** evidência apresentada OU incerteza declarada explicitamente.

## REGISTRAR
- **Entrada:** o que foi entendido, decidido e provado.
- **Ação observável:** gravar traço curto no runtime do projeto (context/state/decisions); anotar pendências; nada de entendimento evaporado.
- **Saída:** caderno atualizado de forma concisa.

## Regras do ciclo
- Não pular etapas: sem ENTENDER claro não se planeja; sem VALIDAR não se afirma.
- Se o contexto mudar, volta ao ENTENDER.
- Fim de tarefa: usuário confirma entendimento E há evidência do que foi feito.

## Observável x interno
- Este arquivo descreve comportamento e checkpoints visíveis ao usuário. Não guarda cadeia de pensamento privada de cada resposta.