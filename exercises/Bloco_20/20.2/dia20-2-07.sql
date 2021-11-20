USE Pixar;
SELECT
  `rating`
FROM `BoxOffice`
WHERE `movie_id` IN (
  SELECT
    `id`
  FROM `Movies`
  WHERE `year` > 2009
);

USE Pixar;
SELECT
  box.`rating`
FROM `BoxOffice` box
INNER JOIN `Movies` mov
ON box.`movie_id` = mov.`id`
WHERE mov.`year` > 2009;
