# Bloco 25 - MongoDB: Aggregation Framework

## Dia 2 - Aggregation Framework Pt.2

Você continuará utilizando o banco de dados `erp` do dia anterior. Nos exercícios **1** a **8**, você utilizará o mesmo _pipeline_. A ideia é começar com um _pipeline_ pequeno e ir adicionando estágios à medida que você for evoluindo nos exercícios.

**Exercício 1:** Utilize uma combinação das expressões aritméticas e adicione um campo chamado `idade` à coleção `clientes`. Algumas dicas:

- arredonde para baixo o valor da idade;

- calcule a idade usando a diferença entre a data corrente e a data de nascimento;

- 1 dia é igual a 86400000 milissegundos.

**Exercício 2:** Utilizando o novo campo `idade`, conte quantos clientes têm entre `18` e `25` anos.

**Exercício 3:** Remova os estágios `$count` e `$match` do exercício anterior e adicione um estágio no _pipeline_ que coloque as compras do cliente no campo `compras`.

**Exercício 4:** Selecione TODOS os clientes que compraram entre `Junho de 2019` e `Março de 2020`.

**Exercício 5:** Confira o número de documentos retornados pelo _pipeline_ com o método `itcount()`. Até aqui, você deve ter `486` documentos sendo retornados.

**Exercício 6:** Ainda nesse _pipeline_, descubra os `5` estados com mais compras.

**Exercício 7:** Descubra o cliente que mais consumiu `QUEIJO PRATO`. Retorne um documento com a seguinte estrutura:

```js
{
  "nomeCliente": "NOME",
  "uf": "UF DO CLIENTE",
  "totalConsumido": 100
}
```

**Exercício 8:** Selecione todas as vendas do mês de `Março de 2020`, com `status EM SEPARACAO`. Acrescente um campo chamado `dataEntregaPrevista` com valor igual a três dias após a data da venda. Retorne apenas os campos `clienteId`, `dataVenda` e `dataEntregaPrevista`.

## Bônus

**Exercício 9:** Calcule a diferença absoluta em dias entre a data da primeira entrega prevista e a última, considerando o _pipeline_ do exercício 8.
