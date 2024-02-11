import express from "express"
import { allStaff, createStaff, deleteStaff, updateStaff } from "../controller/StaffController.js";


const StaffRoutes = express.Router();

StaffRoutes.post('/create-staff',createStaff)
StaffRoutes.put('/update-staff/:id',updateStaff)
StaffRoutes.get('/get-staff',allStaff)
StaffRoutes.delete('/delete-staff/:id',deleteStaff)


export default StaffRoutes