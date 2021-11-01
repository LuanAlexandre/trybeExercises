SELECT AVG(salary), COUNT(department_id) FROM hr.employees
GROUP BY department_id
HAVING COUNT(department_id) > 10;