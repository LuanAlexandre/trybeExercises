USE Pixar;
SELECT
  `name`,
  `location`
FROM `Theater` AS the
WHERE EXISTS (
  SELECT * FROM `Movies`
  WHERE the.`id` = `Movies`.theater_id
);
