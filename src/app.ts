import express from 'express';
import apiRouter from './api/api-router.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Server is up!!');
});
app.use(express.json());
app.use('/api/v1', apiRouter);

app.listen(port, () => `Example app listening on port ${port}`);
