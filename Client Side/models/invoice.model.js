import { Schema } from 'mongoose';
import invoiceManagerConnection from '../db/db.js';

let ClientSchema=new Schema(
    {
        client_id:{ type: String, unique: true, required: true},
        client_email:String,
        client_name:String,
        client_address:String,

    }
)


    const InvoiceSchema = new Schema(   
        {
        // Unique invoice identifier (e.g., "INV-1057")
        inv_id: { type: String, unique: true, required: true },
        
        // Reference to your user/client table
        client_ref: { type: String, required: true},
        // Currency for the invoice (e.g., "MYR")
        currency: { type: String, default: "MYR" },
        
        // Date invoice is issued
        inv_date_issued: { type: Date, default: Date.now },
        
        // Due date for the invoice
        inv_due_date: { type: Date, required: true },
        
        // Additional reference number if needed (e.g., "PQRXMLZ4")
        ref_number: { type: String },
        
        // Array of items (services or products) billed in this invoice
        items: [
            {
            // An internal item identifier (optional)
            item_id: { type: String, required: true },
            
            // Description of the service or product
            description: { type: String, required: true },
            
            // Unit price for this item
            unit_price: { type: Number, required: true },
            
            // Quantity for this item
            quantity: { type: Number, required: true },
            
            // Total amount for this item (unit_price * quantity)
            amount: { type: Number, required: true },
            },
        ],
        
        // Subtotal of all items before tax
        inv_subtotal: { type: Number, required: true },
        
        // Tax amount, if applicable
        inv_tax_amount: { type: Number, default: 0 },
        
        // Grand total (subtotal + tax)
        inv_total_amount: { type: Number, required: true },
        
        // Status of the invoice: Pending, Paid, or Overdue
        inv_status: {
            type: String,
            enum: ["Pending", "Paid", "Overdue"],
            default: "Pending",
        },
        
        // Automatically updates to current date/time when any document field is changed
        updated_at: { type: Date, default: Date.now },
        },
        { timestamps: true }
    );
  

    let ChartAccSchema=new Schema(
        {
            title: String,
            categories:Array,
        }
    )
    const AdminSchema = new Schema(
        {
          username: { type: String, unique: true, required: true },
          password: { type: String, required: true },
        },
        { timestamps: true }
    );
    const accountMappingSchema = new Schema(
        {
          // A unique transaction type key, e.g., "Revenue", "Expense", "Asset Purchase"
          transactionType: { type: String, required: true, unique: true },
      
          // The account name to use for the debit side (e.g., "Cash at Bank", "Expense Account", or a generic "Asset")
          debit: { type: String, required: true },
      
          // The account name to use for the credit side (e.g., "Service Revenue", "Cash at Bank")
          credit: { type: String, required: true },
        },
        {
          timestamps: true, // Optionally add createdAt and updatedAt fields
        }
    );

    const accountSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    type: { 
        type: String, 
        required: true,
        enum: ['Asset', 'Expense', 'Revenue', 'Liability', 'Equity'] // allowed types
    },
    balance: { 
        type: Number, 
        default: 0 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
    });
    const journalEntrySchema = new Schema({
        date: { 
          type: Date, 
          required: true 
        },
        description: { 
          type: String, 
          required: true 
        },
        entries: [
          {
            accountId: { 
              type: Schema.Types.ObjectId, 
              ref: 'Account', 
              required: true 
            },
            accountName: { 
              type: String, 
              required: true 
            },
            debit: { 
              type: Number, 
              default: 0 
            },
            credit: { 
              type: Number, 
              default: 0 
            },
          }
        ],
        createdAt: { 
          type: Date, 
          default: Date.now 
        }
    });


var Account=invoiceManagerConnection.model('Account', accountSchema);
var JournalEntry=invoiceManagerConnection.model('JournalEntry', journalEntrySchema);


var accountingMapping=invoiceManagerConnection.model("mappingdetails",accountMappingSchema)
var clientdetails = invoiceManagerConnection.model("clientdetails",ClientSchema);
var characcdetails = invoiceManagerConnection.model("chartAcc",ChartAccSchema);
var invoicedetails = invoiceManagerConnection.model("invoicedetails",InvoiceSchema);
var adminlogin = invoiceManagerConnection.model("adminlogin", AdminSchema);



export {clientdetails, invoicedetails,characcdetails,adminlogin,accountingMapping,Account,JournalEntry,};
