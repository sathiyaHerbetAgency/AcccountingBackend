import { createTransport } from "nodemailer";


const mail = async (mailId,docs)=>{
    var sendermail='sathiyaibe@gmail.com'
let transporter = createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: sendermail,
        pass: 'igvixnhrtbuwevwx'
      }

  });
  let info = await transporter.sendMail({
    from: sendermail, // sender address
    to: mailId, // list of receivers
    subject: "Confirmation Booking", // Subject line
    text: "Your Booking Confirmation Pdf for reference ", // plain text body
    attachments:  docs,    
    html:"<b>Dear Customer,</b><br>Greetings from Booking App <br> <br> <br> Thanks for cab booking using booking app <br>Happy Travelling! <br> <b>Team Booking App<b>",


  });


}

const CompletedMail=async(mailId,id)=>{
  var sendermail="sathiyaibe@gmail.com"
  let transporter=createTransport({
    service:"gmail",
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
      user:sendermail,
      pass: 'igvixnhrtbuwevwx'
    }
  });
  let info = await transporter.sendMail({
    from:sendermail,
    to:mailId,
    subject:`Journey Completed-${id}`,
    text:'Thanks For Select Our Service',
    html:"<b>Hope You Enjoyed Our Service </b> <br>If you have any queries please contact in our applicaion <br>Happy Regards! <br> <b>Team Booking App<b>"
  })
}

export{mail, CompletedMail}