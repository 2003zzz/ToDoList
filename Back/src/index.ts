import dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response } from 'express';
import { createServer } from 'http'; 
import SequelizeInit from './models';
import userRoute from './routes/user';
import cors from 'cors';

const app = express();
const server = createServer(app);

app.use(cors());
app.use(express.json()); 
app.use("/user", userRoute);

 const start = async () => {
     await SequelizeInit();
    server.listen(8080, () => {
    console.log('Сервер запущен на порту 8080');
 })};

 start()