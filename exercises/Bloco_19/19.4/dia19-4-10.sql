-- **Exercício 10:** Exclua da tabela `Movies` todos os filmes com menos de 100 minutos de duração.

USE Pixar;
SELECT
  `id`
FROM `Movies`
WHERE `length_minutes` < 100;

USE Pixar;
DELETE FROM `BoxOffice`
WHERE `movie_id` IN (1, 6, 7, 8);

USE Pixar;
DELETE FROM `Movies`
WHERE `id` IN (1, 6, 7, 8);
