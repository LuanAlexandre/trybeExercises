USE sakila;
CREATE VIEW `movies_languages` AS
  SELECT
    f.`title`,
    f.`language_id`,
    lan.`name`
  FROM `language` lan
  INNER JOIN (
    SELECT
      `title`,
      `language_id`
    FROM `film`
  ) f
  ON lan.`language_id` = f.`language_id`;
