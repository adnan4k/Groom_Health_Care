import express from "express"
import { allStaff, createStaff, deleteStaff, updateStaff } from "../controller/StaffController.js";


const StaffRoutes = express.Router();

StaffRoutes.post('/create-staff',createStaff)
StaffRoutes.post('/edit-staff/:id',updateStaff)
StaffRoutes.get('/get-staff',allStaff)
StaffRoutes.delete('/delete-staff/:id',deleteStaff)


export default StaffRoutes