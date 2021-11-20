USE Pixar;
SELECT
  the.*,
  mov.*
FROM `Theater` the
LEFT JOIN `Movies` mov
ON the.`id` = mov.`theater_id`
ORDER BY the.`name`;
