import express from 'express';
import apiRouter from './api/api-router.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(express.json());
app.use('/api/v1', apiRouter);

// App.post('/', (req, res) => {
//   res.json('Hello World fucking Indio!');
// });

app.listen(port, () => `Example app listening on port ${port}`);
