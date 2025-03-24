import {createConnection } from 'mongoose';
// const url="mongodb+srv://<sathiya>:<sathiya@cluster0.ehydi.mongodb.net/";
const dbUri = 'mongodb+srv://sathiya:sathiya@cluster0.ehydi.mongodb.net/' || 'mongodb://0.0.0.0:27017/InvoiceManager';

var con1=createConnection(dbUri,
  {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  },
  function (err, db) {
    console.log("Invoice Manager Database Connected successfully");
  }
);
export default con1;