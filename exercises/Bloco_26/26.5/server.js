import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import atividade01 from './routes/atividade01.js';
import atividade02 from './routes/atividade02.js';
import atividade03 from './routes/atividade03.js';
import atividade04 from './routes/atividade04.js';

const PORT = 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/user', atividade01);

app.use('/btc', atividade02);

app.use('/posts', atividade03);

app.use('/teams', atividade04);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
