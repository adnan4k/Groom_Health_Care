import express from "express"
import { allNews, createNews, deleteNews, updateNews } from "../controller/NewsController.js";


const NewsRoutes = express.Router();

NewsRoutes.post('/create-news',createNews)
NewsRoutes.put('/update-news/:id',updateNews)
NewsRoutes.get('/get-news',allNews)
NewsRoutes.delete('/delete-news/:id',deleteNews)


export default NewsRoutes