select "firstName",
      "lastName",
SUM ("p"."amount") as "totalSpent"
FROM "customers"
JOIN "payments" as "p" USING ("customerId")

group by "customerId"
order by "totalSpent" DESC
LIMIT 5;
