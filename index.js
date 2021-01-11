import express from 'express';
import consign from 'consign';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';

const app = express(); // Iniciando o express em app

app.use(bodyParser.json()); // Iniciando o bodyparser
app.use(morgan('dev')); // Iniciando o morgan para ver o log de requisições
app.use(express.json());

dotenv.config();

consign()
    .then('./api')
    .then('./routes')
    .into(app)

app.listen(3000, () => {
    console.log('Server is running...');
  });