import express from 'express';

const app = express();

// to set up a route
app.get('/', (req, res) => {
  res.send('Hello John, THis is your Express Server!');
});

// begin the server on 8080 oort
app.listen(8080, () => {
  console.log('Express Server listening on port 8080');
});
