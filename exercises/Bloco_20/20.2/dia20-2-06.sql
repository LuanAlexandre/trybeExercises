USE Pixar;
SELECT
  `title`
FROM `Movies`
WHERE `id` IN (
  SELECT
    `movie_id`
  FROM `BoxOffice`
  WHERE `rating` > 7.5
);

USE Pixar;
SELECT
  mov.`title`
FROM `Movies` mov
INNER JOIN `BoxOffice` box
ON mov.`id` = box.`movie_id`
WHERE box.`rating` > 7.5;
