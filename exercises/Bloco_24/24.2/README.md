# Bloco 24 - Updates Simples e Complexos

## Updates Complexos Pt.1

```js
db.movies.drop();
db.movies.insertMany([
  {
    title: "Batman",
    category: [
      "action",
      "adventure",
    ],
    imdbRating: 7.7,
    budget: 35,
  },
  {
    title: "Godzilla",
    category: [
      "action",
      "adventure",
      "sci-fi",
    ],
    imdbRating: 6.6,
    budget: 1,
  },
  {
    title: "Home Alone",
    category: [
      "family",
      "comedy",
    ],
    imdbRating: 7.4,
  },
]);
```

Para cada execução, utilize o método find() para conferir as alterações nos documentos.

**Exercício 1:** Adicione a categoria `"superhero"` ao filme `Batman`.

**Exercício 2:** Utilizando o modificador `$each`, adicione as categorias `"villain"` e `"comic-based"` ao filme `Batman`.

**Exercício 3:** Remova a categoria `"action"` do filme `Batman`.

**Exercício 4:** Remova o primeiro elemento do _array_ `category` do filme `Batman`.

**Exercício 5:** Remova o último elemento do _array_ `category` do flime `Batman`.

**Exercício 6:** Adicione o elemento `"action"` ao _array_ `category` do filme `Batman`, garantindo que esse valor não se duplique.

**Exercício 7:** Adicione a categoria `"90's"` aos filmes `Batman` e `Home Alone`.

**Exercício 8:** Crie um _array_ de documentos chamado `cast` para o filme `Home Alone` com os seguintes dados:

```js
{
  "actor": "Macauly Culkin",
  "character": "Kevin"
},
{
  "actor": "Joe Pesci",
  "character": "Harry"
},
{
  "actor": "Daniel Stern"
}
```

**Exercício 9:** Adicione o campo `character` com o valor `Marv` ao _array_ de `cast` em que o campo `actor` seja igual a `Daniel Stern` no filme `Home Alone`.

`**Dica**`: Para isso, [leia aqui](https://docs.mongodb.com/manual/reference/operator/update/positional/) sobre o operador `$`.

**Exercício 10:** Crie um _array_ de documentos chamado `cast` para o filme `Batman` com o seguintes dados:

```js
{
  "character": "Batman"
},
{
  "character": "Alfred"
},
{
  "character": "Coringa"
}
```

**Exercício 11:** Produza três _queries_ para o filme `Batman`:

- Adicione o campo `actor`, que deve ser um array com o valor `Christian Bale`, ao _array_ de `cast` em que o campo `character` seja igual ao `Batman`;

- Adicione o campo `actor`, que deve ser um array com o valor `Michael Caine`, ao _array_ de `cast` em que o campo `character` seja igual ao `Alfred`;

- Adicione o campo `actor`, que deve ser um array com o valor `Heath Ledger`, ao _array_ de `cast` em que o campo `character` seja igual ao `Coringa`;

**Exercício 12:** Adicione aos atores de `cast` do `character Batman` do flime `Batman` os valores `"Michael Keaton"`, `"Val Kilmer"` e `"George Clooney"`, e deixe o array em ordem alfabética.
