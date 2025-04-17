// import dns from 'dns';

// // Force Node to use Google DNS servers for resolution
// dns.setServers(['8.8.8.8', '8.8.4.4']);

// import { createConnection } from 'mongoose';

// const mongoUri = "mongodb+srv://sathiyasankar0107:Y2oLOW2i4xly74LD@cluster0.u5knrry.mongodb.net/invoiceManager?retryWrites=true&w=majority";

// const invoiceManagerConnection = createConnection(mongoUri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   family: 4, // Force IPv4
// });

// invoiceManagerConnection.on('connected', () => {
//   console.log("Invoice Manager Database connected successfully.");
// });

// invoiceManagerConnection.on('error', (error) => {
//   console.error("Error connecting to Invoice Manager Database:", error);
// });

// invoiceManagerConnection.on('disconnected', () => {
//   console.log("Connection disconnected.");
// });

// export default invoiceManagerConnection;

// import { createConnection } from 'mongoose';
// const connectionString = 'mongodb://sathiya:KM2JXOXorBqoHsf9@cluster0-shard-00-00.qvtevsu.mongodb.net:27017,cluster0-shard-00-01.qvtevsu.mongodb.net:27017,cluster0-shard-00-02.qvtevsu.mongodb.net:27017/Accounting?ssl=true&replicaSet=atlas-xxxxx-shard-0&authSource=admin&retryWrites=true&w=majority';

// const invoiceManagerConnection = createConnection(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// invoiceManagerConnection.on('connected', () => {
//     console.log('Accounting Database Connected successfully');
// });

// invoiceManagerConnection.on('error', (err) => {
//     console.error('Accounting Database connection error:', err);
// });

// export default invoiceManagerConnection;
import mongoose, {createConnection} from 'mongoose';
// const invoiceManagerConnection =()=>{
// mongoose.connect(
//   'mongodb+srv://sathiya:KM2JXOXorBqoHsf9@cluster0.qvtevsu.mongodb.net/Accounting?retryWrites=true&w=majority',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// ).then(() => {
//   console.log('✅ MongoDB connected successfully');
// }).catch((err) => {
//   console.error('❌ MongoDB connection error:', err.message);
// });
// }
const urls='mongodb+srv://sathiya:KM2JXOXorBqoHsf9@cluster0.bxwqdsa.mongodb.net/'
const invoiceManagerConnection =  mongoose.connect(urls)
 
// const userSchema = new mongoose.Schema({
// name: String,
// age: Number,
// country: String
// })
// const userModel= mongoose.model("emps", userSchema);
// const emp1 = new userModel ({
// name: "juliana",
// age: 25,
// country: "Canada"
// })
// emp1.save();

  
export default invoiceManagerConnection;