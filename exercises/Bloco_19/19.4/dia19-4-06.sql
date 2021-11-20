-- **Exercício 6:** Exclua da tabela `Movies` o filme "WALL-E".

USE Pixar;
DELETE FROM `BoxOffice`
WHERE `movie_id` = 11;

USE Pixar;
DELETE FROM `Movies`
WHERE `id` = 11;