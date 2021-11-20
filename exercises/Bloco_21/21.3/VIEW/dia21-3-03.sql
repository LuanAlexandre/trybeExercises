CREATE VIEW `address_info` AS
  USE sakila;
  SELECT
    ad.`address_id`,
    ad.`address`,
    ad.`district`,
    ad.`city_id`,
    c.`city`
  FROM (
    SELECT
      `address_id`,
      `address`,
      `district`,
      `city_id`
    FROM `address`
  ) ad
  INNER JOIN `city` c
  ON ad.`city_id` = c.`city_id`
  ORDER BY `city`;
