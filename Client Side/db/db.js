import { createConnection } from 'mongoose';

const mongoUri = "mongodb://0.0.0.0:27017/InvoiceManager" ||  'mongodb+srv://sathiya:pT623BttvBCmNov9@cluster0.ehydi.mongodb.net/';

const invoiceManagerConnection = createConnection(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (error) => {
  if (error) {
    console.error("Error connecting to Invoice Manager Database:", error);
  } else {
    console.log("Invoice Manager Database connected successfully.");
  }
});

invoiceManagerConnection.on('error', (error) => {
  console.error("Connection error:", error);
});
invoiceManagerConnection.on('connected', () => {
  console.log("Connection established.");
});
invoiceManagerConnection.on('disconnected', () => {
  console.log("Connection disconnected.");
 

});

export default invoiceManagerConnection;
