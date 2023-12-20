# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  Create - Insert Read - Select Update - Update Delete = Delete
- How do you add a row to a SQL table?
  by using Insert into table_name(columns)
- How do you add multiple rows to a SQL table at once?
  Insert into table_name(columns) Value(values)
- How do you update rows in a database table?
  by using Update table_name(columns)
- How do you delete rows from a database table?
  Delete table_name(columns)

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  Ensures specific rows are targeted
- How do you accidentally delete or update all rows in a table?
  Frogetting to include a WHERE clause
- How do you get back the modified row without a separate `select` statement?
  By utlizing the RETURNING clause
- Why did you get an error when trying to delete certain films?
  Likely becuase of certain keys constraints for dependencies

## Notes

All student notes should be written here.

                                         Table "public.actors"

Column | Type | Collation | Nullable | Default
-----------+--------------------------+-----------+----------+-----------------------------------------
actorId | integer | | not null | nextval('actor_actor_id_seq'::regclass)
firstName | text | | not null |
lastName | text | | not null |
updatedAt | timestamp with time zone | | not null | now()
Indexes:
"actor_pkey" PRIMARY KEY, btree ("actorId")
"idx_actor_last_name" btree ("lastName")
Referenced by:
TABLE ""castMembers"" CONSTRAINT "film_actor_actor_id_fkey" FOREIGN KEY ("actorId") REFERENCES actors("ac
:q

          List of relations

Schema | Name | Type | Owner
--------+-------------+-------+-------
public | actors | table | dev
public | addresses | table | dev
public | castMembers | table | dev
public | cities | table | dev
public | countries | table | dev
public | customers | table | dev
public | filmGenre | table | dev
public | films | table | dev
public | genres | table | dev
:

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
