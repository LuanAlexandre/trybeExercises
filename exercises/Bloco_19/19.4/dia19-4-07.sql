-- **Exercício 7:** Exclua da tabela `Movies` todos os filmes dirigidos por "Andrew Staton".

USE Pixar;
DELETE FROM `BoxOffice`
WHERE `movie_id` IN (2, 9);

USE Pixar;
DELETE FROM Movies
WHERE `director` = 'Andrew Staton';
