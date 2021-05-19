## Exercícios Dia 8.1

1. Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id.

**_const newEmployees = () => {_**
  **_const employees = {_**
    **_id1: // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro_**
    **_id2: // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro_**
    **_id3: // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro_**
  **_}_**
  **_return employees;_**
**_};_**

2. Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

3. Crie uma HOF utilizando o conceito de currying. Passe como parâmetros a resposta correta (Ex: Gabarito) para uma pergunta e uma resposta a ser validada (Ex: Resposta de uma pessoa). Sua HOF deve checar se a resposta enviada pela pessoa usuária é correta. Se for, a função retorna true , se não for, a função retorna false .
A validação da resposta não deve ser case sensitive.
Deve ser possível chamar a HOF criada de forma encadeada (Ex: checarResposta('Gabarito')('Teste'))

**// Sugestão de respostas a serem validadas.**
**const correctAnswer = 'higher order function';**
**const userAnswer = 'HIGHER ORDER FUNCTION';**

4. Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

**const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];**
**const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];**

## Bônus:

### Parte I - Game Actions Simulator

Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.

1. Crie uma função que retorna o dano do dragão.

 - O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo **strength** (dano máximo).

2. Crie uma função que retorna o dano causado pelo **warrior**.

 - O dano será um número aleatório entre o valor do atributo **strength** (dano mínimo) e o valor de **strength * weaponDmg** (dano máximo).

3. Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.

 - O dano será um número aleatório entre o valor do atributo **intelligence** (dano mínimo) e o valor de **intelligence** * 2 (dano máximo).

 - A **mana** consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui **mana** suficiente") e a **mana** gasta é 0.

 ### Parte II
 
 Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF, pois neste caso, são funções que recebem como parâmetro outra função.

1. Crie a primeira HOF que compõe o objeto **gameActions**. Ela será a função que simula o turno do personagem **warrior**. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem **warrior** e atualizará os **healthPoints** do monstro **dragon**. Além disto ela também deve atualizar o valor da chave **damage** do **warrior**.

2. Crie a segunda HOF que compõe o objeto **gameActions**. Ela será a função que simula o turno do personagem **mage**. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem **mage** e atualizará os **healthPoints** do monstro **dragon**. Além disto ela também deve atualizar o valor das chaves **damage** e **mana** do **mage**.

3. Crie a terceira HOF que compõe o objeto **gameActions**. Ela será a função que simula o turno do monstro **dragon**. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro **dragon** e atualizará os **healthPoints** dos personagens **mage** e **warrior**. Além disto ela também deve atualizar o valor da chave **damage** do monstro.

4. Adicione ao objeto gameActions uma função que retorne o objeto **battleMembers** atualizado e faça um **console.log** para visualizar o resultado final do turno.
