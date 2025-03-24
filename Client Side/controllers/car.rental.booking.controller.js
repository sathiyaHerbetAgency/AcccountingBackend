
import { clientdetails,invoicedetails } from "../models/invoice.model.js";

  const ClientDetailsPost=async(req,res)=>{
      const data=req.body
      try{
        const existingEmail = await clientdetails.findOne({ client_email: data.client_email });

        if (existingEmail) {
          return res.status(400).json({ message: "Email already exists" });
        }
    
        // Check if the client ID already exists in the database
        const existingClientId = await clientdetails.findOne({ client_id: data.client_id });
        if (existingClientId) {
          return res.status(400).json({ message: "Client ID already exists, try again" });
        }
          const store= await new clientdetails({...data}).save()
          res.status(200).json(store)
      }catch(err){
          console.log(err)
          res.status(400).json({message:data})
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
  const getIndividualClientData = async (req, res) => {
        const id=req.params.id
        console.log(id)
        try {
          var ClientData = await clientdetails.find({clientId:id});
          console.log(ClientData)
          res.status(200).json(ClientData)
        } catch(err) {
            console.log(err)
          res.status(400).json('Internal Error')
        }
  }
  

export {ClientDetailsPost,getAllClientData,getIndividualClientData}