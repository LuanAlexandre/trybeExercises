import express from 'express';
import bodyParser from 'body-parser';
import errorMiddleware from './middlewares/errorMiddleware.js';
import atividade01 from './routes/atividade01.js';

const PORT = 3001;

const app = express();
app.use(bodyParser.json());

app.use('/', atividade01);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
