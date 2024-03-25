import  Appointment  from "../model/Appointment.js";
import nodemailer from 'nodemailer';
import  User  from "../model/User.js";
import { where } from "sequelize";

export const signup = async (req, res) => {
    const { email, name, role, password } = req.body;
//  console.log(req.body,'body')
    const check = await User.findAll({where:{ email: email }});

    if (check.length !== 0) {
        // console.log(check,'in the chcke')
        return res.status(400).json("exist");
    } else {
        try {
            const user = await User.create(req.body);
            // console.log(user,'saved')
            // const savedUser = await user.save();
            res.status(201).json(user);
        } catch (error) {
            console.log(error)
            res.json(error);
        }
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
        //   console.log(req.body,'body')
    if (!email && !password) {
        return res.json({ message: 'provide credential' });
    }
    try {
        const user = await User.findOne({where:{ email: email }});
        console.log(user,'user')
        if (!user) {
            return res.status(400).json({ message: "notfound" });
        }
        if (user.password == password) {
            return res.status(200).json({ message: "loggedin", user });
        } else {
            return res.status(400).json({ message: "invalidCredentials" });
        }
    } catch (error) {
        return res.json(error);
    }
};

async function sendEmailToAdmin(userAppointmentDetails, email) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "fayomuhe5@gmail.com",
            pass: "vypd cqxp eqqm krsg",
            port: 465,
            secure: true,
        }
    });

    let info = await transporter.sendMail({
        from: email,
        to: "fayomuhe5@gmail.com",
        subject: "New Appointment Created",
        text: `A new appointment has been created: ${JSON.stringify(userAppointmentDetails)}`,
        html: `<b>A new appointment has been created:</b> <pre>${JSON.stringify(userAppointmentDetails, null, 2)}</pre>`,
    });
}

async function sendEmailToAdminForContact(user, email) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "fayomuhe5@gmail.com",
            pass: "vypd cqxp eqqm krsg",
            port: 465,
            secure: true,
        }
    });

    let info = await transporter.sendMail({
        from: email,
        to: "grooming1st@gmail.com",
        subject: "New message arrived ",
        text: `a New message has arrived: ${JSON.stringify(user)}`,
        html: `<b>a New message has arrived:</b> <pre>${JSON.stringify(user, null, 2)}</pre>`,
    });
}
export const handleContact = async(req,res) =>{
  const user = req.body
try {
  await sendEmailToAdminForContact(user,user.email)
  return res.status(200).json({ message: 'Email sent successfully' });

} catch (error) {
  return res.status(500).json(error)
}
  return
}
export const makeAppointment = async (req, res) => {
    const appointmentDetails = req.body;
    // console.log(appointmentDetails,'here')
    try {
        const userAppointment = await  Appointment.create(appointmentDetails);
        // const savedAppointment = await userAppointment.save();
        if (userAppointment) {
            const senderEmail = appointmentDetails.email;
            await sendEmailToAdmin(appointmentDetails, senderEmail);

            res.status(201).json(userAppointment);
        } else {
            res.status(500).json("error occurred");
        }
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
};

export const getAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findAll();
        if (appointment) {
            res.status(200).json({ appointment });
        } else {
            res.status(500).json({ message: "No appointments found" });
        }

    } catch (error) {
        res.status(400).json(error);
    }
};
