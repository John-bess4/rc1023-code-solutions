import express from 'express';

const app = express();

app.use(express.json());

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

let nextId = 1;

const grades: Record<number, Grade> = {};

app.get('/api/grades', (req, res) => {
  const gradesArray: Grade[] = [];
  for (const grade in grades) {
    gradesArray.push(grades[grade]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const { name, course, score } = req.body;
  if (!name || !course || !score) {
    res.sendStatus(400).json({ error: 'Sorry, Incomplete request ' });
    return;
  }
  const id = nextId++;
  const newGrade = { id, name, course, score };

  grades[id] = newGrade;
  res.status(201).json(newGrade);
});

app.listen(8080, () => {
  console.log('running on the port 8080');
});
