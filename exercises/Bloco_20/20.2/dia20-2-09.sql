USE Pixar;
SELECT
  `name`,
  `location`
FROM `Theater` AS the
WHERE NOT EXISTS (
  SELECT * FROM `Movies`
  WHERE the.`id` = `Movies`.theater_id
);
