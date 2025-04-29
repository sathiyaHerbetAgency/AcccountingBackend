import { clientdetails,invoicedetails } from "../models/invoice.model.js";

  const InvoiceDetailsPost=async(req,res)=>{
      const data=req.body
      console.log(data)
      try{
          // const count= await cabsbooking.find({driverId:req.body.driverId}).count()
          const store= await new invoicedetails({...data}).save()
          console.log(store)
          res.status(200).json(store)
      }catch(err){
          console.log(err)
          res.status(400).json({message:"Internal Error"})
      }
  }
  const getAllInvoiceData = async (req, res) => {
    const id=req.params.id
    try {
      var Invoicedata = await invoicedetails.find({client_id:id});
      res.status(200).json(Invoicedata)
    } catch(err) {
        console.log(err)
      res.status(400).json('Internal Error')
    }
  }
  const getIndividualInvoiceData = async (req, res) => {
        const id=req.params.id
        console.log(id)
        try {
          const invoice = await invoicedetails.findOne({ inv_id: id }).lean();
          if (!invoice) return res.status(404).json({ message: "Invoice not found" });
      
          // 2) fetch client by the ref
          const client = await clientdetails.find({client_id:invoice.client_ref}).lean();
          if (!client) {
            // maybe invoice has a stale ref?
            return res.status(404).json({ message: "Client not found" });
          }

          const data= {...invoice, ...client[0]}
          console.log(data)
      
          // 3) merge and send
          res.status(200).json(data);
        } catch(err) {
            console.log(err)
          res.status(400).json('Internal Error')
        }
  }

/**
 * Returns a summary of invoices grouped by client:
 *  - clientName
 *  - totalInvoices
 *  - totalAmount
 *  - lastInvoiced (date)
 */
const getAllClientInvoiceSummary = async (req, res) => {
  try {
    // Aggregate on the Invoice collection
    const summary = await invoicedetails.aggregate([
      // 1) Group by the client_ref to get totals
      {
        $group: {
          _id: "$client_ref",
          totalInvoices: { $sum: 1 },
          totalAmount: { $sum: "$inv_total_amount" },
          lastInvoiced: { $max: "$inv_date_issued" },
        },
      },
      // 2) Lookup the client name and other info from the Client collection
      {
        $lookup: {
          from: "clientdetails",        // The actual MongoDB collection name for Client
          localField: "_id",      // _id from the group stage (which is client_ref)
          foreignField: "client_id", 
          as: "clientData",
        },
      },
      // 3) Unwind so we can project the fields
      {
        $unwind: "$clientData",
      },
      // 4) Project the final shape
      {
        $project: {
          _id: 0,
          clientId: "$_id",
          clientName: "$clientData.client_name",
          totalInvoices: 1,
          totalAmount: 1,
          lastInvoiced: 1,
        },
      },
    ]);

    // Return as JSON
    res.status(200).json(summary);
  } catch (err) {
    console.error(err);
    res.status(400).json("Internal Error");
  }
};


export {InvoiceDetailsPost,getAllInvoiceData,getIndividualInvoiceData,getAllClientInvoiceSummary}