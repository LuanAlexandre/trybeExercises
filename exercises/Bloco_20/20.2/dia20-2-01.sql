USE Pixar;
SELECT
  mov.`title`,
  box.`domestic_sales`,
  box.`international_sales`
FROM `BoxOffice` box
INNER JOIN `Movies` mov
ON box.`movie_id` = mov.`id`;
