import express, { Request, Response } from 'express';

const app = express();

// middleware to log the current time
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// middleware to log the HTTP method and send a response
app.use((req: Request, res: Response) => {
  console.log('HTTP method:', req.method);
  res.send('Hello, this is your modified express server!');
});

// start server on the port 8080

app.listen(8080, () => {
  console.log('Express Server listening on port 8080');
});
