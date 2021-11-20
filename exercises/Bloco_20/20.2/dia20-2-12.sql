-- **Exercício 12:** Faça duas buscas, uma utilizando **`SUBQUERY`** e outra utilizando **`INNER JOIN`** ,
-- que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.
USE Pixar;
SELECT
  `title`
FROM `Movies`
WHERE `id` IN (
  SELECT
    `movie_id`
  FROM `BoxOffice` box
  WHERE `domestic_sales` + `international_sales` >= 500000000
);

USE Pixar;
SELECT
  mov.`title`
FROM (
  SELECT
    `movie_id`
  FROM `BoxOffice` box
  WHERE `domestic_sales` + `international_sales` >= 500000000
) box
INNER JOIN `Movies` mov
ON box.`movie_id` = mov.`id`;
