import Note from "../model/Note.js";


export  const  getNotes = async(req,res)=>{
    try{
        const notes = await Note.find().sort({createdAt:-1}); // Newest First
        res.status(200).json({success: true ,Data:notes});
    }
    catch(error){
        console.log("Error in getAllNotes: ", error)
        res.status(500).json({message:"Internal Server error"})
    }
}
export const getNoteById = async(req,res)=>{
    try{
        const findNoteByID = await Note.findById(req.params.id);
        if(!findNoteByID){
            // console.log(findNoteByID)
            res.status(404).json({message:"Note not found."})
        }else{
            res.status(200).json({success: true ,Data:findNoteByID});
        }
    }
    catch(error){
        console.log("Error in getNoteByID: ", error)
        res.status(500).json({message:"Internal Server error"})
    }
}

export const createNotes = async(req,res)=>{
    try{
        const {title, content} = req.body;
        // console.log(title, content);
        const newNote = new Note({title, content})
       const savedNote =  await newNote.save();
        res.status(201).json({success: true ,message: "Note successfully created", data: savedNote});
    }
    catch(error){
        console.log("Error in creating Note: ", error)
        res.status(500).json({message:"Internal Server error"})
    }
}

export const updateNotes = async(req,res)=>{
    // console.log(req.params.id);
    try{
        const {title, content} = req.body;
        const findNote = await Note.findByIdAndUpdate(req.params.id, {title,content}, {new:true});
        if(!findNote){
            console.log(findNote)
            res.status(404).json({message:"Note not found."})
        }else{

        
        
       
        
        res.status(200).json({message:"Note updated successfully.", data: findNote})
        }
    }
    catch(error){
        console.log("Error in updating Note: ", error)
        res.status(500).json({message:"Internal Server error"})
    }
    
}

export const deleteNotes = async(req,res)=>{
    //  console.log(req.params.id);
    try{
        const findNote = await Note.findByIdAndDelete(req.params.id);
           if(!findNote){
            res.status(404).json({message:"Note not found."})
        }else{
            
            res.status(200).json({message:"Note delete successfully."})
        }
        
       
    }
    catch(error){
         console.log("Error in deleting Note: ", error)
        res.status(500).json({message:"Internal Server error"})
    }
    
}