/* table employee */
/* department_name employee_id emloyee_name */
/* table salaries */
/* salary employee_id employee_name */

/* print every deparment where the average salary per employee is lower than $500 */

SELECT department_name
FROM employees
JOIN salaries
ON employees.employee_id = salaries.employee_id
GROUP BY department_name
HAVING AVG(saleries.salary) < 500;


