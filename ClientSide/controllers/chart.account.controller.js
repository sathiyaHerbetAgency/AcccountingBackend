
import { clientdetails,invoicedetails,characcdetails } from "../models/invoice.model.js";



  const ClientDetailsPost=async(req,res)=>{
      const data=req.body
      try{
          // const count= await cabsbooking.find({driverId:req.body.driverId}).count()
          // const store= await new clientdetails({...data}).save()
          // console.log(store)
          // res.status(200).json(store)
          console.log(data.client_email)
      }catch(err){
          console.log(err)
          res.status(400).json({message:"Internal Error"})
      }
  }
  const getAllClientData = async (req, res) => {
    try {
      var ClientData = await clientdetails.find();
      res.status(200).json(ClientData)
    } catch(err) {
        console.log(err)
      res.status(400).json('Internal Error')
    }
  }
  const getChartAccountData = async (req, res) => {
    try {
        // Retrieve all documents from the manually created collection
        var data = await characcdetails.find();
        res.status(200).json(data)
      } catch (error) {
        console.error('Error fetching manual collection data:', error);
        res.status(500).json({ message: 'Failed to fetch data' });
      }
  }
  

export {getChartAccountData}