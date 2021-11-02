SELECT ROUND(MAX(salary), 2) AS `Maior_salário`, ROUND(MIN(salary), 2) AS `Menor_salário`,
ROUND(SUM(salary), 2) AS `Total_salários`, ROUND(AVG(salary), 2) AS `Média_salários` FROM hr.employees;