CREATE VIEW `film_info` AS
  USE sakila;
  SELECT
    ftab.`actor_id`,
    CONCAT(ftab.`first_name`, ' ', ftab.`last_name`) AS `actor`,
    f.`title`
  FROM `film` f
  INNER JOIN (
    SELECT
      act.`actor_id`,
      act.`first_name`,
      act.`last_name`,
      tab.`film_id`
    FROM `actor` act
    INNER JOIN (
      SELECT
        `actor_id`,
        `film_id`
      FROM `film_actor`
    ) tab
    ON act.`actor_id` = tab.`actor_id`
  ) ftab
  ON f.`film_id` = ftab.`film_id`
  ORDER BY `actor`;
