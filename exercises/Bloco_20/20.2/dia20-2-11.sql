USE Pixar;
SELECT
  mov1.`title`,
  mov1.`length_minutes`
FROM `Movies` mov1, `Movies` mov2
WHERE mov1.director = mov2.director;
