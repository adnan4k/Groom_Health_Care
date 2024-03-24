import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"
import multer from "multer"
import NewsRoutes from "./routes/NewsRoute.js"
import ServiceRoutes from "./routes/ServiceRoute.js"
import StaffRoutes from "./routes/StaffRoute.js"
import TestimonyRoutes from "./routes/TestimonyRoute.js"
import path from "path"
import UserRoutes from "./routes/UserRoute.js"



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './public/images');
  },
  filename: function (req, file, cb) {
      cb(null, file.fieldname + "--" + Date.now() + path.extname(file.originalname));
  }
});  
  
  const upload = multer({storage:storage})
  
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(express.static('public'))
//   app.use(express.urlencoded({extended:true}));
  app.use('/images',express.static('images'))

//routes
  app.use('/news',upload.single('image'),NewsRoutes)
  app.use('/service',upload.single('image'),ServiceRoutes)
  app.use('/staff',upload.single('image'),StaffRoutes)
  app.use('/testimony',upload.single('image'),TestimonyRoutes)
  app.use('/user',UserRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/groom_health_care")
  .then(() => {
    app.listen(4000, () => {
      console.log("App is listening on port", 4000);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
