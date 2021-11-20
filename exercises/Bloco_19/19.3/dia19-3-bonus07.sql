USE Scientists;
SELECT
  Name,
  Code
FROM Projects
WHERE Name NOT LIKE 'A%';