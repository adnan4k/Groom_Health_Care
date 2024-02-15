import express from "express"
import { getAppointment, login, makeAppointment, signup } from "../controller/UserController.js";


const UserRoutes = express.Router();

UserRoutes.post('/create-appointment',makeAppointment)
UserRoutes.post('/signup',signup)
UserRoutes.get('/get-appointment',getAppointment)
UserRoutes.post('/login',login)


export default UserRoutes