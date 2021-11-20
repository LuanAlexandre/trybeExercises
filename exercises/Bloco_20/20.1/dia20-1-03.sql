SELECT AVG(salary), job_id FROM hr.employees
GROUP BY job_id
ORDER BY AVG(salary) DESC;