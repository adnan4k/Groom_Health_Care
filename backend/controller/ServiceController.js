import { Service } from "../model/Service.js";

export const createService = async (req,res)=>{
    const {
        title,
        image,
        description,
    } = req.body;
    // console.log(title,image,description)
    try {
        const updateData = {
            title: title,
            description: description,
        };
        
        if (req.file) {
            updateData.image = req.file.filename;
        }
const service = new Service (updateData)
        const savedService = await service.save();

        if (!savedService) {
            return res.status(400).json({ message: "cannot be created " });
          }
          return res.status(201).json({savedService});
      

    } catch (error) {
        console.log(error)
    }
}




export const updateService = async(req,res) =>{
    const{title,description} = req.body
    const {id} = req.params
      
    try {
      
        const updateData = {
            title: title,
            description: description,
        };
        
        if (req.file) {
            updateData.image = req.file.filename;
        }
        
        const service = await Service.findByIdAndUpdate(id, updateData, { new: true });
        
        if(service){
            return res.status(200).json({message:'service updated successfully'})
        }else{
            return res.status(500).json({message:'something went wrong'})
        }
     } catch (error) {
        console.log(error,)
        return res.status(500).json(error)
     }
}



export const allService = async(req,res) =>{
    let service;
    try {
       service = await Service.find()
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