import Staff from "../model/Staff.js";

export const createStaff = async (req,res)=>{
    const {
        title,
        name,
        experience,
        image,
        description,
    } = req.body;
    
    try {
const staff = new Staff ({
            title:title,
            image:req.file.filename,
            description:description,
            name:name,
            experience:experience,

        })
        const savedStaff = await staff.save();

        if (!savedStaff) {
            return res.status(400).json({ message: "cannot be created " });
          }
          return res.status(201).json({savedStaff});
      

    } catch (error) {
        console.log(error)
    }
}





export const updateStaff = async(req,res,next) =>{
//  console.log(req.body)
    const {   
        title,
        image,
        description,
        name,
        experience,
    } = req.body;
    const {id} = req.params;
      
    try {
        const updateData = {
            title: title,
            description: description,
            name:name,
            experience:experience
        };
        
        if (req.file) {
            updateData.image = req.file.filename;
        }
    const staff = await Staff.findByIdAndUpdate(id,updateData,{new:true})    
    if(!staff){
     return res.status(500).json({message:"error while saving"});
    }

return res.status(200).json({message:"updated Staff",staff})
} catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const allStaff = async(req,res) =>{
    let staff;
    try {
       staff = await Staff.findAll()
    } catch (error) {
        return res.status(500).json({message:"server error"})
    }
    if(!staff){
        return res.status(404).json({message:"no Staff"})
    }
    return res.status(200).json(staff);
}


export const deleteStaff = async(req,res) =>{
    const id = req.params.id 
    try {
        const deleted = await Staff.destroy({
            where: { id: id }
        });

        if(!deleted){
            return res.json({message:"Staff  doesn't exist"})
        }
            
 return res.status(200).json({message:"Staff deleted"})
    } catch (error) {
        return res.status(500).json(error)
    }
}