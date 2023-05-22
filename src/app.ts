import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import studentRoutes from './routes/student.routes';
const jagtester = require('jagtester');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(jagtester(app));



app.use(studentRoutes);

export default app;