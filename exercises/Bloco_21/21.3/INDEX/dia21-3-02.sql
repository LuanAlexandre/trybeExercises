USE sakila;
CREATE INDEX `test_postal_code`
ON `address`(`postal_code`);

-- Após o INDEX ter sido criado o custo foi de 0.35

USE sakila;
DROP INDEX `test_postal_code` ON `address`;

-- Após e exclusão o custo foi de 61.80
