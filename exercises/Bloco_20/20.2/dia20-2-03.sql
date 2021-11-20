USE Pixar;
SELECT
  mov.`title`,
  box.`rating`
FROM `Movies` mov
INNER JOIN `BoxOffice` box
ON mov.`id` = box.`movie_id`
ORDER BY `rating` DESC;
