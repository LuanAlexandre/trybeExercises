# Bloco 21 - Normalização e Modelagem de Banco de Dados

## Dia 3 - Transformando Ideias em um Modelo de Banco de Dados  Parte 2

### Desafios sobre `VIEW`

**Exercício 1:** Cria uma view chamada `film_with_categories` utilizando as tabelas `category`, `film_category` e `film` do banco de dados `sakila`.
Essa view deve exibir o `título` do filme, o `id` da categoria e o `nome` da categoria. Os resultados devem ser ordenados pelo `título` do filme.

**Exercício 2:** Crie uma view chamada `film_info` utilizando as tabelas `actor`, `film_actor` e `film` do banco de dados `sakila`. Sua view deve exibir o `actor_id`, o nome completo do ator ou da atriz em uma coluna com o `ALIAS actor` e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes.

**Exercício 3:** Crie uma view chamada `address_info` que faça uso das tabelas `address` e `city` do banco de dados `sakila`. Sua view deve exibir o `address_id`, o `address`, o `district`, o `city_id` e a `city`. Os resultados dever ser ordenados pelo nome das cidades.

**Exercício 4:** Crie uma view chamada `movies_languages`, usando as tabelas `film` e `language` do banco de dados `sakila`. Sua view deve exibir o **título do filme**, o **id do idioma** e o **idioma do filme**.

### Desafios sobre `INDEX`

**Exercício 1:** Verifique o impacto de um `FULLTEXT INDEX` na tabela `category` (banco de dados `sakila`), adicionando-o na coluna `name`. Após ter adicionado o índice, mensure o custo da query utilizando o `execution plan`, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

```sql
-- Após ter criado o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

-- Após ter excluído o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';
```

**Exercício 2:** Verifique o impacto de um `INDEX` na tabela `address` (banco de dados `sakila`) adicionando-o na coluna `postal_code`. Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

```sql
-- Mensure o custo com a seguinte query:
SELECT *
FROM sakila.address
WHERE postal_code = '36693';
```

### Desafios sobre `ALTER TABLE`

- **utilize o banco de dados `hr`**

**Exercício 1:** Escreva uma query SQL para alterar a tabela `locations` o nome da coluna `street_address` para `address`, mantendo o mesmo tipo e tamanho de dados.

**Exercício 2:** Escreva uma query SQL para alterar o nome da coluna `region_name` para `region`, mantendo o mesmo tipo e tamanho de dados.

**Exercício 3:** Escreva uma query SQL para alterar o nome da coluna `country_name` para `country`, mantendo o mesmo tipo e tamanho de dados.
