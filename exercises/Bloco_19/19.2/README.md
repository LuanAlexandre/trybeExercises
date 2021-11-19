# Bloco 19 - Introdução à SQL

## Dia 2 - Encontrando Dados em um Banco de Dados

- **Restaure o seguinte banco de dados**

```js
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);

INSERT INTO Scientists(SSN,Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
```

**Exercício 1:** Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".

**Exercício 2:** Escreva uma query para exibir três números em três colunas.

**Exercício 3:** Escreva uma query para exibir a soma dos números 10 e 15.

**Exercício 4:** Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.

**Exercício 5:** Escreva uma query para exibir todas as informações de todos os cientistas.

**Exercício 6:** Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.

**Exercício 7:** Escreva uma query para exibir o nome de cientistas em ordem alfabética.

**Exercício 8:** Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.

**Exercício 9:** Escreva uma query que exiba a string "O projeto `name` precisou de `hours` horas para ser concluído." para cada projeto.

**Exercício 10:** Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.

**Exercício 11:** Escreva uma query para exibir o código de todos os projetos da tabela `AssignedTo` sem que haja repetições.

**Exercício 12:** Escreva uma query para exibir o nome do projeto com a maior quantidade de horas.

**Exercício 13:** Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.

**Exercício 14:** Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.

**Exercício 15:** Escreva uma query que exiba a string "Existem `Number` cientistas na tabela Scientists", em que `Number` se refira à quantidade de cientistas.

## Bônus

- **Restaure o seguinte banco de dados para os exercícios de 1 a 5**

```js
DROP SCHEMA IF EXISTS PiecesProviders;
CREATE SCHEMA PiecesProviders;
USE PiecesProviders;

CREATE TABLE Pieces (
  Code INTEGER PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Providers (
  Code VARCHAR(40) PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Provides (
  Piece INTEGER,
  FOREIGN KEY (Piece) REFERENCES Pieces (Code),
  Provider VARCHAR(40),
  FOREIGN KEY (Provider) REFERENCES Providers (Code),
  Price INTEGER NOT NULL,
  PRIMARY KEY (Piece , Provider)
);

INSERT INTO Providers(Code, Name)
  VALUES ('HAL', 'Clarke Enterprises'),
    ('RBT', 'Susan Calvin Corp.'),
    ('TNBC', 'Skellington Supplies');

INSERT INTO Pieces(Code, Name)
  VALUES (1, 'Sprocket'),
    (2, 'Screw'),
    (3, 'Nut'),
    (4, 'Bolt');

INSERT INTO Provides(Piece, Provider, Price)
  VALUES (1, 'HAL', 10),
    (1, 'RBT', 15),
    (2, 'HAL', 20),
    (2, 'RBT', 25),
    (2, 'TNBC', 14),
    (3, 'RBT', 50),
    (3, 'TNBC', 45),
    (4, 'HAL', 5),
    (4, 'RBT', 7);
```

**Exercício 1:** Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa `RBT`.

**Exercício 2:** Escreva uma query para exibir todas as informações das cinco peças com os maiores preços.

**Exercício 3:** Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.

**Exercício 4:** Escreva uma query para exibir todas as informações das peças que são providas pela empresa `HAL`. Ordene o resultado pelos preços das peças de forma decrescente.

**Exercício 5:** Escreva uma query para exibir por quantas empresas a peça 1 é provida.

**Exercício 6:** Usando `WHERE`, faça os exercícios [deste link](https://www.w3schools.com/sql/exercise.asp?filename=exercise_where1).

**Exercício 7:** Aplicando Restrições, faça os exercícios [deste link](https://sqlbolt.com/lesson/select_queries_with_constraints).

**Exercício 8:** Estude e faça os exercícios das páginas 1 a 3 [deste link](http://www.sqlcourse.com/intro.html).

**Exercício 9:**  Exercícios de comparação de valores. Faça os exercícios [deste link](https://sqlzoo.net/wiki/SELECT_from_WORLD_Tutorial).
