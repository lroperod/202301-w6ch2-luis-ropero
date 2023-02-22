import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  res.json('Hello World fucking Indio!');
});

app.listen(port, () => `Example app listening on port ${port}`);
