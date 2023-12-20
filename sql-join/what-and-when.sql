select "film"."title" as "filmTitle",
"films"."releaseYear" as "releaseYear",
"genres"."name" as "genreName"
from "filmGenre"
join "genres" using ("genreId")
  join "films" using ("filmsId")
  where "films"."title" using "Boogie Amelie"
