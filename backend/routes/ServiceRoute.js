import express from "express"
import { allService, createService, deleteService, updateService } from "../controller/ServiceController.js";


const ServiceRoutes = express.Router();

ServiceRoutes.post('/create-service',createService)
ServiceRoutes.put('/update-service/:id',updateService)
ServiceRoutes.get('/get-service',allService)
ServiceRoutes.delete('/delete-service/:id',deleteService)


export default ServiceRoutes