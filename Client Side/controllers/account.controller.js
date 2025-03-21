
import { clientdetails,invoicedetails,accountingMapping,JournalEntry,Account   } from "../models/invoice.model.js";

  const addMappingData=async(req,res)=>{
      const data=req.body
      try{

          const store= await new accountingMapping( {
            transactionType: "Equity",
            debit: "Cash at Bank",        // Cash increases when owner injects capital
            credit: "Share Capital"       // Equity account increases on credit
          }).save()
          res.status(200).json(store)
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


  
   const createJournalEntryFromType = async (req, res) => {
    const { accountType, amount, date, description } = req.body;
  
    try {
      // Look up the mapping for the given transaction type
      const mapping = await accountingMapping.findOne({ transactionType: accountType });
      if (!mapping) {
        throw new Error(`Mapping for transaction type '${accountType}' not found.`);
      }
  
      // Use the mapping to look up the corresponding accounts
      let debitAccount = await Account.findOne({ name: mapping.debit });
      let creditAccount = await Account.findOne({ name: mapping.credit });
  
      if (!debitAccount) {
        let defaultDebitType;
        switch (accountType) {
          case 'Revenue':
            // For revenue transactions, the debit account is usually an Asset (Cash)
            defaultDebitType = 'Asset';
            break;
          case 'Expense':
            defaultDebitType = 'Expense';
            break;
          case 'Asset Purchase':
            defaultDebitType = 'Asset';
            break;
          case 'Liability':
            // For liability transactions, the debit account is typically an Asset (Cash)
            defaultDebitType = 'Asset';
            break;
          case 'Equity':
            // For equity transactions, the debit account is typically an Asset (Cash)
            defaultDebitType = 'Asset';
            break;
          default:
            defaultDebitType = 'Asset';
        }
        debitAccount = new Account({
          name: mapping.debit,
          type: defaultDebitType,
          balance: 0,
        });
        await debitAccount.save();
      }
  
      if (!creditAccount) {
        let defaultCreditType;
        switch (accountType) {
          case 'Revenue':
            defaultCreditType = 'Revenue';
            break;
          case 'Expense':
            // For expense transactions, the credit account is usually an Asset (Cash)
            defaultCreditType = 'Asset';
            break;
          case 'Asset Purchase':
            // For asset purchase, the credit is typically an Asset (Cash)
            defaultCreditType = 'Asset';
            break;
          case 'Liability':
            defaultCreditType = 'Liability';
            break;
          case 'Equity':
            defaultCreditType = 'Equity';
            break;
          default:
            defaultCreditType = 'Asset';
        }
        creditAccount = new Account({
          name: mapping.credit,
          type: defaultCreditType,
          balance: 0,
        });
        await creditAccount.save();
      }
  
      // Create the journal entry document with two entries: one debit and one credit
      const journalEntry = new JournalEntry({
        date: date ? new Date(date) : new Date(),
        description,
        entries: [
          {
            accountId: debitAccount._id,
            accountName: debitAccount.name,
            debit: amount,
            credit: 0,
          },
          {
            accountId: creditAccount._id,
            accountName: creditAccount.name,
            debit: 0,
            credit: amount,
          },
        ],
      });
  
      await journalEntry.save();
  
      // Update Account Balances
      // For the debit account: if it's an Asset or Expense, an increase is a debit (i.e., add amount),
      // otherwise (e.g., Liability, Equity, Revenue), a debit entry would decrease the balance.
      if (['Asset', 'Expense'].includes(debitAccount.type)) {
        debitAccount.balance += amount;
      } else {
        debitAccount.balance -= amount;
      }
  
      // For the credit account: if it's Revenue, Liability, or Equity, a credit increases the balance,
      // otherwise (Asset or Expense), a credit entry would decrease the balance.
      if (['Revenue', 'Liability', 'Equity'].includes(creditAccount.type)) {
        creditAccount.balance += amount;
      } else {
        creditAccount.balance -= amount;
      }
  
      await debitAccount.save();
      await creditAccount.save();
  
      res.status(201).json(journalEntry);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  


export {addMappingData,getAllClientData,getIndividualClientData,createJournalEntryFromType}