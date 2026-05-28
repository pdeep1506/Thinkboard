export const getNotes = (req,res)=>{
    res.status(200).send("you just fetched notes.")
}

export const createNotes = (req,res)=>{
    res.status(201).json({message:"Poat created successfully."})
}

export const updateNotes = (req,res)=>{
    // console.log(req.params.id);
    res.status(200).json({message:"Post updated successfully."})
}

export const deleteNotes = (req,res)=>{
    //  console.log(req.params.id);
    res.status(200).json({message:"Post deleted successfully."})
}