import {createConnection } from 'mongoose';
  const url="mongodb+srv://<sathiya>:<sathiya@cluster0.ehydi.mongodb.net/";
var con1=createConnection(url,
  {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  },
  function (err, db) {
    console.log("Invoice Manager Database Connected successfully");
  }
);
export default con1;
