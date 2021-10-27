## Bloco 21 - Normalização e Modelagem de Banco de Dados
## Dia 2 - Normalização, Formas Normais e Dumps

Não é necessário montar queries para resolver os exercícios. Crie novas planilhas com suas respostas.

### Exercício 1: Converta a tabela desnormalizada abaixo para a 1ª Forma Normal.

Tabela desnormalizada:

| residencia_id | residencia_locador |     tipo    |              endereco                 |         inquilinos         |
| ------------- | ------------------ | ----------- | ------------------------------------- | -------------------------- |
|       1       |    Doren Fatima    | casa        | Rua Norte Sul, 35, Belo Horizonte, MG | João, Mária, Carlos        |
|       2       |   Ramon Jonathan   | apartamento | Av Rodrigues Ramos, 950, Salvador, BA | Sebastião, Alfredo         |
|       3       |   Vanderson Judis  | apartamento | Rua Brusque, 352, Ipatinga, MG        | Marta, Marizete            |
|       4       |   Carolina Rude    | casa        | Av Atlantica, 254, Camboriú, SC       | Letícia, Laísa, Bartomoleu |

### Exercício 2: Converta a tabela desnormalizada abaixo (que já está nos padrões da 1ª Forma Normal) para a 2ª Forma Normal.

Tabela desnormalizada:

| heroi_id |     heroi     |      liga      | universo |   criador   | criador_idade |
| -------- | ------------- | -------------- | -------- | ----------- | ------------- |
| 1        | Homem Aranha  | Avengers       | Marvel   | Stan Lee    | 95            |
| 2        | Jean Grey     | X-Men          | Marvel   | Gardner Fox | 75            |
| 3        | Flash         | Justice League | DC       | Bill Finger | 60            |
| 4        | Batman        | Justice League | DC       | Lwn Wein    | 69            |

### Exercício 3: Agora, converta essa outra tabela (que já está nos moldes das duas primeiras formas) para a 3ª Forma Normal.

Tabela desnormalizada

| filme_id |     genero_id     |      genero       | valor_entrada |
| -------- | ----------------- | ----------------- | ------------- |
| 1        | 1                 | Ação              | 27.90         |
| 2        | 2                 | Biográfico        | 30.70         |
| 3        | 2                 | Biográfico        | 26.25         |
| 4        | 3                 | Comédia           | 17.80         |
| 5        | 4                 | Drama             | 21.50         |
| 6        | 4                 | Drama             | 18.00         |
| 7        | 5                 | Comédia Romântica | 15.75         |