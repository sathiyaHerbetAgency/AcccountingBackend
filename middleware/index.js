import dotenv from 'dotenv';
import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(cors({
    origin: ['http://localhost:3000','https://kiraa1.netlify.app/'],
    credentials: true 
}));
app.use(morgan('tiny'));
app.use(compression());
const port = 8081;
//micro services

// app.use('/authentication', createProxyMiddleware({ target: process.env.Authentication, changeOrigin: true }));
// app.use('/search', createProxyMiddleware({ target: process.env.Search, changeOrigin: true }));
app.use('/clients', createProxyMiddleware({ target: process.env.Booking, changeOrigin: true }));
// app.use('/hotel', createProxyMiddleware({target: process.env.Hotel, changeOrigin:true}));
// app.use('/hotelbooking', createProxyMiddleware({target: process.env.HotelBooking, changeOrigin:true}));
// app.use('/user', createProxyMiddleware({ target: process.env.User, changeOrigin: true }));

app.get('/',(req,res)=>res.send("Hello"));
app.listen(port,() => console.log(`Middleware api listening on port ${port}!`));
