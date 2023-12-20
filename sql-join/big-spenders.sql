select "payments"."amount",
        "customers"."firstName"
        "customers"."lastName"
  from payments
  Join customers ON payments.customerId = customers.customerId
  order by payments.amount desc
  LIMIT 10;
