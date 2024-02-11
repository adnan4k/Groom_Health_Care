import { News } from "../model/News.js";

export const createNews = async (req,res)=>{
    const {
        title,
        image,
        content,
    } = req.body;
    
    try {
        const news = new News ({
            title:title,
            image:image,
            content:content,

        })
        const savednews = await news.save();

        if (!savednews) {
            return res.status(400).json({ message: "cannot be created " });
          }
          return res.status(201).json({savednews});
      

    } catch (error) {
        console.log(error)
    }
}





export const updateNews = async(req,res,next) =>{
    const {   
        title,
        image,
        content,
    } = req.body;
    const {id} = req.params;
    

    try {
    const news = await News.findByIdAndUpdate(id,{
        title:title,
        image:image,
       content:content
    },{new:true})    

    if(!news){
     return res.status(500).json({message:"error while saving"});
    }

return res.status(200).json({news})
} catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const allNews = async(req,res) =>{
    let news;
    try {
       news = await News.find()
    } catch (error) {
        return res.status(500).json({message:"server error"})
    }
    if(!news){
        return res.status(404).json({message:"no news"})
    }
    return res.status(200).json(news);
}


export const deleteNews = async(req,res) =>{
    const id = req.params.id 
    try {
        const deleted = await News.findByIdAndDelete(id);
        if(!deleted){
            return res.json({message:"news  doesn't exist"})
        }
            
 return res.status(200).json({message:"news deleted"})
    } catch (error) {
        return res.status(500).json(error)
    }
}