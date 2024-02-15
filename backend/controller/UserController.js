import { Appointment } from "../model/Appointment.js";
import nodemailer from 'nodemailer';
import { User } from "../model/User.js";


export const  signup = async(req,res) =>{

  const {email,name,role,password} = req.body
   
   const check = await User.findOne({email:email})

   if(check){
    res.status(400).json("exist")
}else{
    try {
        const user = new User({
       email:email,
       name:name,
       password:password,
       role:role
        })

        const savedUser = await user.save();
        res.status(201).json({savedUser})
      } catch (error) {
        res.json(error)
      }
   }
}
export const login = async(req,res) => {
    const {email, password} = req.body;

        if(!email && !password){
            return res.json({message:'provide credential'})
        }
    try {
        const user = await User.findOne({email: email});
        if (!user) {
            return res.status(400).json({message: "notfound"}); // Add return here
        }
        if (user.password == password) {
            return res.status(200).json({message: "loggedin", user}); // Add return here
        } else {
            return res.status(400).json({message: "invalidCredentials"}); // Add return here
        }
    } catch (error) {
        return res.json(error); // Add return here
    }
};


// Function to send an email
async function sendEmailToAdmin(userAppointmentDetails) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
           user: "fayomuhe5@gmail.com",
           pass: "vypd cqxp eqqm krsg",
           port: 465,
           secure: true,
        }       
     });
   
  let email = userAppointmentDetails.email
  let info = await transporter.sendMail({
    from: email, // sender address
    to: "fayomuhe5@gmail.com", // list of receivers
    subject: "New Appointment Created", // Subject line
    text: `A new appointment has been created: ${JSON.stringify(userAppointmentDetails)}`, // plain text body
    html: `<b>A new appointment has been created:</b> <pre>${JSON.stringify(userAppointmentDetails, null, 2)}</pre>`, // html body
  });

//   console.log("Message sent: %s", info.messageId);
}

export const makeAppointment = async(req, res) => {
  const appointmentDetails = req.body;
    // console.log(appointmentDetails)
  try {
    const userAppointment = new Appointment(appointmentDetails);
    const savedAppointment = await userAppointment.save();
    if(savedAppointment) {
      // Send email notification to admin
      await sendEmailToAdmin(appointmentDetails);
      
      res.status(201).json({ savedAppointment });
    } else {
      res.status(500).json("error occurred");
    }
  } catch (error) {
    res.status(400).json(error);
  }
}


export const getAppointment = async(req,res) =>{
    try {
        const appointment = await Appointment.find();
        if(appointment){
            res.status(200).json({appointment})
        }else{
            res.status(500).json({appointment})
        }
        
    } catch (error) {
        res.status(400).json(error)
    }
}