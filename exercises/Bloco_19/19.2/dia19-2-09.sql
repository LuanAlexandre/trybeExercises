USE Scientists;
SELECT
  CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') AS `Info`
FROM Projects;