import { Service } from "../model/Service.js";

export const createService = async (req,res)=>{
    const {
        title,
        image,
        description,
    } = req.body;
    
    try {
const service = new Service ({
            title:title,
            image:image,
            description:description,

        })
        const savedService = await service.save();

        if (!savedService) {
            return res.status(400).json({ message: "cannot be created " });
          }
          return res.status(201).json({savedService});
      

    } catch (error) {
        console.log(error)
    }
}





export const updateService = async(req,res,next) =>{
    const {   
        title,
        image,
        description,
    } = req.body;
    const {id} = req.params;
    

    try {
    const service = await Service.findByIdAndUpdate(id,{
        title:title,
        image:image,
       description:description
    },{new:true})    
    if(!service){
     return res.status(500).json({message:"error while saving"});
    }

return res.status(200).json({message:"updated service",service})
} catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const allService = async(req,res) =>{
    let service;
    try {
       Service = await Service.find()
    } catch (error) {
        return res.status(500).json({message:"server error"})
    }
    if(!service){
        return res.status(404).json({message:"no Service"})
    }
    return res.status(200).json(service);
}


export const deleteService = async(req,res) =>{
    const id = req.params.id 
    try {
        const deleted = await Service.findByIdAndDelete(id);
        if(!deleted){
            return res.json({message:"Service  doesn't exist"})
        }
            
 return res.status(200).json({message:"Service deleted"})
    } catch (error) {
        return res.status(500).json(error)
    }
}