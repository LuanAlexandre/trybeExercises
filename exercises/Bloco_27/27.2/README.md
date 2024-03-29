# Bloco 27 - Node.js: Camada de Serviço e Arquitetura REST e RESTful

## Dia 2 - Arquitetura de Software: Camadas de Controller e Service

Você vai desenvolver uma aplicação de busca de CEP, chamada `cep-lookup`. A aplicação fornecerá um serviço de busca e cadastro de CEPs em um banco de dados. Como bônus, ao invés de cadastrar novos CEPs manualmente, a aplicação consultará uma API externa para obter os dados do CEP desejado.

Utilize o banco de dados MySQL. Execute a seguinte query para criar o banco e a tabela:

```sql
CREATE DATABASE IF NOT EXISTS cep_lookup;

USE cep_lookup;

CREATE TABLE IF NOT EXISTS ceps (
  cep VARCHAR(8) NOT NULL PRIMARY KEY,
  logradouro VARCHAR(50) NOT NULL,
  bairro VARCHAR(20) NOT NULL,
  localidade VARCHAR(20) NOT NULL,
  uf VARCHAR(2) NOT NULL
);
```

Bons estudos!

1. Crie uma nova API utilizando o express

    1. A aplicação deve ser um pacote Node.js

    2. Dê ao pacote o nome de `cep-lookup`

    3. Utilize o express para gerenciar os endpoints da sua aplicação

    4. A aplicação deve ter a rota `GET /ping` , que retorna o `status 200` OK e o seguinte JSON:

        ```js
        { "message": "pong!" }
        ```

    5. A aplicação deve escutar na porta 3000

    6. Deve ser possível iniciar a aplicação através do comando `npm start`.

2. Crie o endpoint `GET /cep/:cep`

    1. O endpoint deve receber, no parâmetro `:cep` , um número de CEP válido.

    2. O CEP precisa conter 8 dígitos numéricos e pode ou não possui traço.

        - **Dica** Utilize o regex `\d{5}-?\d{3}` para validar o CEP.

    3. Caso o CEP seja inválido, retorne o status `400 Bad Request` e o seguinte JSON:

        ```js
        { "error": { "code": "invalidData", "message": "CEP inválido" } }
        ```

    4. Caso o CEP seja válido, realize uma busca no banco de dados.

    5. Caso o CEP não exista no banco de dados, retorne o status `404 Not Found` e o seguinte JSON:

        ```js
        { "error": { "code": "notFound", "message": "CEP não encontrado" } }
        ```

    6. Caso o CEP exista, retorne o status `200 OK` e os dados do CEP no seguinte formato:

        ```js
        {
          "cep": "01001-000",
          "logradouro": "Praça da Sé",
          "bairro": "Sé",
          "localidade": "São Paulo",
          "uf": "SP",
        }
        ```

3. Crie o endpoint `POST /cep`

    1. O endpoint deve receber a seguinte estrutura no corpo da requisição:

        ```js
        {
          "cep": "01001-000",
          "logradouro": "Praça da Sé",
          "bairro": "Sé",
          "localidade": "São Paulo",
          "uf": "SP",
        }
        ```

    2. Todos os campos são obrigatórios

    3. Utilize o Joi para realizar a validação. Em caso de erro, retorne o status `400 Bad Request` , com o seguinte JSON:

        ```js
        { "error": { "code": "invalidData", "message": "<mensagem do Joi>" } }
        ```

    4. O CEP deve ser composto por 9 dígitos **com** traço.

        - Dica : Utilize o seguinte regex para validar o CEP: `\d{5}-\d{3}`

    5. Se o CEP já existir, retorne o status `409 Conflict` com o seguinte JSON:

        ```js
        {
          "error": { "code": "alreadyExists", "message": "CEP já existente" }
        }
        ```

    6. Se o CEP ainda não existir, armazene-o no banco de dados e retorne o status `201 Created` com os dados do novo CEP no seguinte formato:

        ```js
        {
          "cep": "01001-000",
          "logradouro": "Praça da Sé",
          "bairro": "Sé",
          "localidade": "São Paulo",
          "uf": "SP",
        }
        ```

## Bônus

1. Utilize uma API externa para buscar CEPs que não existem no banco de dados.

2. Quando um CEP não existir no banco de dados, utilize a API [https://viacep.com.br/ws/[numero-do-cep]/json/](https://viacep.com.br/ws/[numero-do-cep]/json/) para obter suas informações.

3. Caso o CEP não exista na API externa, você receberá o JSON `{ "erro": true }`. Nesse caso, retorne status `404 Not Found` com o seguinte JSON:

    ```js
    { "error": { "code": "notFound", "message": "CEP não encontrado" } }
    ```

4. Caso o CEP exista na API externa, armazene-o no banco e devolva seus dados no seguinte formato:

```js
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}
```

**Dica** : Na arquitetura MSC, os models são responsáveis por toda a **comunicação externa de uma aplicação**, o que inclui APIs externas. Logo, você precisará de um model para acessar a API.
