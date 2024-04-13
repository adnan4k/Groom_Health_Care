import express from "express"
import { addSubscription, allSubscription, deleteSubscription } from "../controller/SubscriptionController.js";

const subRouter = express.Router();

subRouter.post('/create-sub',addSubscription);
subRouter.delete('/delete-sub/:id',deleteSubscription);
subRouter.get('/get-sub',allSubscription)

export default subRouter;