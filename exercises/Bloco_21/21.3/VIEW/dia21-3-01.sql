USE sakila;
CREATE VIEW `film_with_categories` AS
  SELECT
    ftab.`title`,
    ftab.`category_id`,
    cat.`name`
  FROM `category` cat
  INNER JOIN (
    SELECT
      f.`title`,
      tab.`category_id`
    FROM `film` f
    INNER JOIN (
      SELECT
        `category_id`,
        `film_id`
      FROM `film_category`
    ) tab
    ON f.`film_id` = tab.`film_id`
  ) ftab
  ON cat.`category_id` = ftab.`category_id`
  ORDER BY `title`;
