USE Scientists;
SELECT
  CONCAT('Existem ', COUNT(*), ' cientistas na tabela Scientists') AS `N de cientistas`
FROM Scientists;