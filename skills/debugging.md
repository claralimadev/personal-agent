# debugging — como caçar um bug

## Relevância: 🔵 máxima (sintoma não é causa)

## Passos (frases curtas)
1. Registre o SINTOMA observado — sem opinião, só o fato.
2. Colete EVIDÊNCIA: mensagem de erro, log, passo que reproduz.
3. Liste hipóteses claras (1 linha cada).
4. Teste a hipótese mais barata primeiro.
5. Encontre a CAUSA, não só a emenda.
6. Corrija o mínimo e VALIDE que o sintoma sumiu.

## Pontos que exigem atenção 🔴
- Saber ler o stack trace: é onde o erro mostra a origem — entender antes de hipotetizar.

## Se precisar aprofundar (lacunas opcionais)
- Minimizar reprodução 🟡
- Bisseção de mudanças 🟡

## Critério de saída
- Causa provada por evidência e correção validada (sintoma sumiu, nada novo quebrou).