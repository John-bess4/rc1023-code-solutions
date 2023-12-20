insert into   "actors"("firstName", "lastName")
values ('John', 'Stamos')
returning *;


SELECT first_Name,
last_name
FROM actors
WHERE first_Name = 'John' AND last_name = 'Stamos'
