import  Testimony  from "../model/Testimony.js";

export const createTestimony = async (req,res)=>{
    // console.log(req.body,'body')
    const {
        name,
        image,
        description,
    } = req.body;
    
    try {
const testimony = new Testimony ({
            name:name,
            image:req.file.filename,
            description:description,

        })
        const savedTestimony = await testimony.save();

        if (!savedTestimony) {
            return res.status(400).json({ message: "cannot be created " });
          }
          return res.status(201).json({savedTestimony});
      

    } catch (error) {
        console.log(error)
    }
}





export const updateTestimony = async(req,res,next) =>{
    const {   
        name,
        image,
        description,
    } = req.body;
    const {id} = req.params;
    

    try {
        const updateData = {
            name: name,
            description: description,
        };
        
        if (req.file) {
            updateData.image = req.file.filename;
        }
    const testimony = await Testimony.update(updateData, {
        where: { id: id },
    });

    if(!testimony){
     return res.status(500).json({message:"error while saving"});
    }

return res.status(200).json({message:"updated Testimony",testimony})
} catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const allTestimony = async(req,res) =>{
    let testimony;
    try {
       testimony = await Testimony.findAll()
    } catch (error) {
        return res.status(500).json({message:"server error"})
    }
    if(!testimony){
        return res.status(404).json({message:"no Testimony"})
    }
    return res.status(200).json(testimony);
}


export const deleteTestimony = async(req,res) =>{
    const id = req.params.id 

    try {
        const deleted = await Testimony.destroy({
            where: { id: id }
        });
        if(!deleted){
            return res.json({message:"Testimony  doesn't exist"})
        }

            
 return res.status(200).json({message:"Testimony deleted"})
    } catch (error) {
        return res.status(500).json(error)
    }
}