//import { cabsbooking } from "../../models/cabbooking.model";

const generatebookingid= (id, count)=> {     
    var digits = '0123456789';
    let OTP = '';
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var date=dd+mm+yyyy
let counts=Number(count)+1
OTP=id.slice(-3)+date+count
    return 'BOOKING-'+OTP;
}
export default generatebookingid;