# Bloco 23 - Introdução ao MongoDB

## Dia 2 - Filter Operators

Para os exercícios a seguir, utilizaremos um banco de dados de super-heróis. Faça o download do arquivo JSON [aqui](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/superheroes-957c961ea234d06d7cfdae73c87d47a6.json).

Após fazer o download do arquivo, importe-o para o **MongoDB** através da ferramenta `mongoimport`. No seu terminal, utilize o seguinte comando (lembre-se de substituir `<caminho do arquivo>` pelo caminho do arquivo na sua máquina):

```sh
mongoimport --db=class --collection=superheroes <caminho do arquivo>
```

Pronto! Você já tem uma base de dados com 734 super-heróis. Para conferir, conecte-se à instância do seu banco de dados utilizando o **Mongo Shell** e execute os seguintes comando:

```sh
use class;
db.superheroes.count();
```

Os documentos têm a seguinte estrutura?

```js
{
    "_id" : ObjectId("5e4ed2b2866be74b5b26ebf1"),
    "name" : "Abin Sur",
    "alignment" : "good",
    "gender" : "Male",
    "race" : "Ungaran",
    "aspects" : {
        "eyeColor" : "blue",
        "hairColor" : "No Hair",
        "skinColor" : "red",
        "height" : 185,
        "weight" : 40.82
    },
    "publisher" : "DC Comics"
}
```

## Exercícios

O **MongoDB** possui diversas ferramentas. Por exemplo, o `mongo`, o `mongosh`, o `Compass` e outras ferramentas de terceiros. Você pode utilizar aquela que achar melhor para executar as consultas (_queries_), o importante é realizá-las.

**Exercício 01:** Inspecione um documento para que você se familiarize com a estrutura. Entenda os atributos e os níveis existentes.

**Exercício 02:** Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está em centímentros.

**Exercício 03:** Retorne o total de super-heróis menor que 1.80m.

**Exercício 04:** Retorne o total de super-heróis com até 1.80m.

**Exercício 05:** Selecione um super-heróis com 2.00m ou mais de altura.

**Exercício 06:** Retorne o total de super-heróis com 2.00m ou mais.

**Exercício 07:** Selecione todos os super-heróis que têm olhos verdes.

**Exercício 08:** Retorne o total de super-heróis com olhos azuis.

**Exercício 09:** Utilizando o operador `$in`, selecione todos os super-heróis com cabelos pretos ou carecas (`"No Hair"`).

**Exercício 10:** Retorne o total de super-heróis com cabelos pretos ou carecas (`"No Hair"`).

**Exercício 11:** Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.

**Exercício 12:** Utilizando o operador `$not`, retorne o total de super-heróis que não tenham mais de 1.80m de altura.

**Exercício 13:** Selecione todos os super-heróis que **não** sejam **humanos nem** sejam maiores do que **1.80m**.

**Exercício 14:** Selecione todos os super-heróis com **1.80m** ou **2.00m** de altura e que **sejam publicados** pela **Marvel Comics**.

**Exercício 15:** Selecione todos os super-heróis que **pesem** entre **80kg** e **100kg**, sejam **Humanos** ou **Mutantes** e não **sejam publicados** pela **DC Comics**.

**Exercício 16:** Retorne o total de documentos que **não** contêm o campo **race**.

**Exercício 17:** Retorne o total de documentos que **contêm** o campo **hairColor**.

**Exercício 18:** Remova **apenas um** documento publicado pela **Sony Pictures**.

**Exercício 19:** Remova todos os documentos **publicados** pelo **George Lucas**.
