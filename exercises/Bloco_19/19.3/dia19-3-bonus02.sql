USE Scientists;
SELECT
  Name
FROM Projects
WHERE Code LIKE 'A%'
ORDER BY Name;