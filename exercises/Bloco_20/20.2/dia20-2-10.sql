USE Pixar;
SELECT
  mov.*
FROM `Movies` mov
INNER JOIN `Theater` the
ON mov.`theater_id` = the.`id`
WHERE mov.`id` IN (
  SELECT
    `movie_id`
  FROM `BoxOffice`
  WHERE `rating` > 8
);
