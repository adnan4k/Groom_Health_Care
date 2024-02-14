import express from "express"
import { allTestimony, createTestimony, deleteTestimony, updateTestimony } from "../controller/TestimonyController.js";


const TestimonyRoutes = express.Router();

TestimonyRoutes.post('/create-testimony',createTestimony)
TestimonyRoutes.post('/edit-testimony/:id',updateTestimony)
TestimonyRoutes.get('/get-testimony',allTestimony)
TestimonyRoutes.delete('/delete-testimony/:id',deleteTestimony)


export default TestimonyRoutes