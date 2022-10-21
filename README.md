Regras 
O universo do Jogo da Vida é uma grade ortogonal bidimensional infinita de células quadradas , cada uma das quais está em um dos dois estados possíveis, vivo ou morto (ou povoado e despovoado , respectivamente). Cada célula interage com seus oito vizinhos , que são as células que são adjacentes horizontalmente, verticalmente ou diagonalmente. A cada passo no tempo, ocorrem as seguintes transições:

Qualquer célula viva com menos de dois vizinhos vivos morre, como se fosse subpopulação.
Qualquer célula viva com dois ou três vizinhos vivos vive para a próxima geração.
Qualquer célula viva com mais de três vizinhos vivos morre, como se por superpopulação.
Qualquer célula morta com exatamente três vizinhos vivos torna-se uma célula viva, como se por reprodução.
Essas regras, que comparam o comportamento do autômato com a vida real, podem ser condensadas no seguinte:

Qualquer célula viva com dois ou três vizinhos vivos sobrevive.
Qualquer célula morta com três vizinhos vivos torna-se uma célula viva.
Todas as outras células vivas morrem na próxima geração. Da mesma forma, todas as outras células mortas permanecem mortas.
O padrão inicial constitui a semente do sistema. A primeira geração é criada aplicando as regras acima simultaneamente a todas as células da semente, vivas ou mortas; nascimentos e mortes ocorrem simultaneamente, e o momento discreto em que isso acontece às vezes é chamado de carrapato . [nb 1] Cada geração é uma função pura da anterior. As regras continuam a ser aplicadas repetidamente para criar novas gerações.