USE sakila;
CREATE FULLTEXT INDEX `test_name`
ON `category` (`name`);

-- Ao rodar a query após o index ter sido criado o custo foi de 0.35

USE sakila;
DROP INDEX `test_name` ON `category`;

-- Após excluir o INDEX o custo foi de 1.85
