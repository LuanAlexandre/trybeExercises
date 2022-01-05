# Bloco 27 - Node.js: Camada de Serviço e Arquitetura REST e RESTful

## Dia 1 - Arquitetura de Software: Introdução e Camada de Model

Você criará uma aplicação que faz CRUD ( **C** reate, **R** ead, **U** pdate e **D** elete) de usuários. A entidade que representa um usuário se chamará `user`.

Utilize a camada de Model que você acabou de estudar para realizar a interação da aplicação com o **MongoDB**.

Com isso em mente, prossiga para a realização dos exercícios:

1. Crie o endpoint `POST /user`

2. Seu endpoint deve receber o seguinte conteúdo no body da request:

```js
{
  "firstName": "Calebe",
  "lastName": "Junior",
  "email": "calebe.junior@gmail.com",
  "password": "d496d5ea2442"
}
```

1. Todos os campos são obrigatórios;

2. O campo `password` deve ser uma string de 6 ou mais caracteres;

3. Caso qualquer um dos campos seja inválido, retorne um JSON com o seguinte formato, variando a mensagem conforme o campo e o erro:

```js
{
  "error": true,
  "message": "O campo 'password' deve ter pelo menos 6 caracteres"
}
```

1. Caso o usuário seja criado com sucesso, retorne os campos `id` (e não `_id` ), `firstName` , `lastName` e `email` em JSON, no formato abaixo, com o status `201 Created`

```js
{
  "id": "1837983326d5cd7ad6da5707a2bd11c5",
  "firstName": "Calebe",
  "lastName": "Junior",
  "email": "calebe.junior@gmail.com"
}
```

O campo `_id` deve ser renomeado para `id` , pois a nomenclatura `_id` trata-se de um detalhe de implementação do MongoDB e que, portanto, deve ser transparente para as demais camadas da aplicação. Dessa forma, ao migrar para um banco relacional, por exemplo, você não precisa alterar o nome de nenhum campo da sua entidade.

1. Crie o endpoint `GET /user`

2. O endpoint sempre deve retornar um array;

3. Quando não houver nenhum usuário cadastrado, retorne um array vazio;

4. Deve sempre retornar o status `200 OK`.

5. Crie o endpoint `GET /user/:id`

6. O endpoint deve retornar o usuário cujo id seja igual ao parâmetro `id` informado na URL. O status deve ser `200 OK`.

7. Caso um usuário com o `id` informado não exista, o endpoint deve retornar o conteúdo abaixo em JSON, com status `404 Not Found`.

```js
{
  "error": true,
  "message": "Usuário não encontrado"
}
```

1. Crie o endpoint `PUT /user/:id`

2. O endpoint deve receber, no corpo da request, os seguintes dados, em JSON:

```js
{
  "firstName": "Calebe",
  "lastName": "Junior",
  "email": "calebe.junior@gmail.com",
  "password": "d496d5ea2442"
}
```

1. Caso qualquer um dos campos esteja faltando ou seja inválido, retorne um JSON com o seguinte formato, variando a mensagem conforme o campo e o erro:

```js
{
  "error": true,
  "message": "O campo 'password' deve ter pelo menos 6 caracteres"
  }
```

1. Caso esteja tudo certo, utilize os dados enviados no corpo da requisição para atualizar o usuário cujo `id` foi especificado na URL.

2. Depois de alterar os dados do usuário no banco, retorne os novos dados com o status `200 OK`, no seguinte formato:

```js
{
  "id": "1837983326d5cd7ad6da5707a2bd11c5",
  "firstName": "Calebe",
  "lastName": "Junior",
  "email": "calebe.junior@gmail.com"
}
```

1. Caso o usuário em questão não exista, retorne o status `404 Not Found` e os seguintes dados em JSON no corpo da resposta:

```js
{
  "error": true,
  "message": "Usuário não encontrado"
}
```

## Bônus

Refatore a camada de model da aplicação criada nos exercícios anteriores para acessar o **MySQL** ao invés do **MongoDB**.

Utilize o script SQL abaixo para criar o banco e a tabela que você precisará utilizar para realizar essa refatoração.

```sql
CREATE DATABASE IF NOT EXISTS users_crud;

USE users_crud;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);
```

Pode ser interessante fazer um cópia da aplicação que desenvolveu anteriormente, assim você terá os dois códigos para consultar posteriormente.
