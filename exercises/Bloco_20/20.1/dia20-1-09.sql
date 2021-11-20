SELECT AVG(salary), job_id FROM hr.employees
WHERE job_id <> 'IT_PROG'
GROUP BY job_id
ORDER BY AVG(salary) DESC;