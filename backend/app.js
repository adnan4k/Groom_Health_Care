import mongoose from "mongoose"
import express from "express"
import multer from "multer"
import NewsRoutes from "./routes/NewsRoute.js"
import ServiceRoutes from "./routes/ServiceRoute.js"
import StaffRoutes from "./routes/StaffRoute.js"
import TestimonyRoutes from "./routes/TestimonyRoute.js"



const storage = multer.diskStorage({
    destination:(req,res,cb)=>{
         cb(null,'images')
    },
    filename:(req,file,cb)=>{
      // console.log(file,'this is file')
      cb(null,path.extname(file.originalname))
      console.log(path.extname(file.originalname),'file name')
    }
  })
  
  const upload = multer({storage:storage})
  
  const app = express();
  app.use(express.json());
//   app.use(express.urlencoded({extended:true}));
  app.use('/images',express.static('images'))

//routes
  app.use('/news',NewsRoutes)
  app.use('/service',ServiceRoutes)
  app.use('/staff',StaffRoutes)
  app.use('/testimony',TestimonyRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/groom_health_care")
  .then(() => {
    app.listen(4000, () => {
      console.log("App is listening on port", 4000);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
