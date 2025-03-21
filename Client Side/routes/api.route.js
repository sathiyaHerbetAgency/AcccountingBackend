import { Router } from 'express';
import {ClientDetailsPost,getAllClientData,getIndividualClientData} from '../controllers/car.rental.booking.controller.js'
import {InvoiceDetailsPost,getAllInvoiceData,getIndividualInvoiceData,getAllClientInvoiceSummary} from '../controllers/invoice.controller.js';
import {getChartAccountData} from '../controllers/chart.account.controller.js';
import {loginController} from '../controllers/login.controller.js';
import {addMappingData,createJournalEntryFromType} from "../controllers/account.controller.js"

var router = Router();
//Cabs Booking
router.post('/clientdetailssave',ClientDetailsPost);
router.get('/clientdatas',getAllClientData);
router.get('/clientdata/:id',getIndividualClientData);
//Invoice 
router.post('/invoicedetailssave', InvoiceDetailsPost);
router.get('/invoicedatas/:id',getAllInvoiceData);
router.get('/invoicedata/:id',getIndividualInvoiceData);
router.get('/chartaccount',getChartAccountData);
router.post('/login',loginController);
router.get('/invoicesummary',getAllClientInvoiceSummary);

//Account

router.post('/mapdata', addMappingData);
router.post('/journalEntry', createJournalEntryFromType);




// router.get('/cabbookingdetailsall',AuthenticateAdminAPI, getAllBookingData);
// router.get('/cabbookingdetails/count',authenticateJWT, bookingCount);
// router.get('/cabbookingdetails/bookingdata/:id', AuthenticateAdminAPI, UserBookingData);
// router.get('/cabbookingdetails/bookingdata', authenticateJWT,UserBooking );
// router.get('/cabbookingdetails/bookingdatas/driver',authenticateJWT,DriverBooking );
// router.get('/cabbookingdetails/bookingdatauser/:id',AuthenticateAdminAPI, UserBookingDataUser);
// router.put('/cabbookingdetails/updatebookingstatus', UpdateStatusJourney);
// router.post('/carbookingsave' ,authenticateJWT ,CarBookingPost)
// router.get('/carbooking',AuthenticateAdminAPI, carBookingsData)
export default router;
