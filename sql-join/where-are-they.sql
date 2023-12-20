select "line1",
      "cities"."name",
      "district",
      "countries".name as "country"
    from "adresses"
    join "cities" using ("cityId")
    join "countries" using ("countryId")
