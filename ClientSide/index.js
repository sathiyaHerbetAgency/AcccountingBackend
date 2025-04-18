import express from 'express';
import bodyparser from 'body-parser';
const { json, urlencoded } = bodyparser;
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import apirouter from './routes/api.route.js';
import dotenv from 'dotenv';

  const app = express();
dotenv.config();
app.use(cors({
    origin: ['http://localhost:3000','http://localhost:3001','https://kiraa1.netlify.app/'],
    credentials: true 
}));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use(compression());
const port = 8083;
//router
app.use('/clients/api', apirouter);
app.get('/',(req,res)=>res.send("Helloss"));
app.get('/clients', (req, res) => res.send('Hello Booking!'));
app.listen(port, () => console.log(`Invoice service listening on port ${port}!`));