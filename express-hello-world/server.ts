import express, { Request, Response } from 'express';

const app = express();

// middleware to log the current time
app.use((req, res, next) => {
  console.log(req.method);
  res.send("Hello, World!");
});

app.listen(8080, () => {
  console.log('Express Server listening on port 8080');
});
