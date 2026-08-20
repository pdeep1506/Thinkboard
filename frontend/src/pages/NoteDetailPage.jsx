import React, {useState, useEffect} from 'react'
import {useNavigate, useParams, Link} from 'react-router'
import axios from 'axios';
import toast from 'react-hot-toast';
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from 'lucide-react';
const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    const fetchNote = async()=>{
       try{
          const res = await axios.get(`https://thinkboard-backend.netlify.app/api/notes/${id}`)
          setNote(res.data.Data);
          // console.log(res.data.Data);
         
       }
       catch(error){
        console.log("Error in fetching note", error);
        toast.error("Failed to fetch the note");
       }
       finally{
        setLoading(false)
       }
    }
    fetchNote();
  },[id])
  const handleSaving = async()=>{
     if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add a title or content");
      return;
    }
    setSaving(true);

    try{
      const updateNotes = await axios.put(`https://thinkboard-backend.netlify.app/api/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/");
    }
    catch(error){
      console.log("Error saving the note:", error);
      toast.error("Failed to update note");
    }
    finally{
      setSaving(false);
    }
  }
  const handleDeleteFunction = async()=>{
      if(!window.confirm("Are you sure you want to delete this note?")) return;

        try{
                const res = await axios.delete(`https://thinkboard-backend.netlify.app/api/notes/${id}`)
                //! get ride of deleted note
                toast.success("Note deleted");
                navigate("/");
         
        }
        catch(error){
            console.log("Error in handleDelete")
            toast.error("Failed to delete note")

        };
  }
  
  if(loading){
     return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }
  return (
    <div className='min-h-screen bg-base-200'>

      <div className='container mx-auto px-4 py-8'>
          <div className='max-w-2xl mx-auto'>
          <div className='flex items-center justify-between mb-6'>

            <Link to='/' className='btn btn-ghost'>
              <ArrowLeftIcon className='h-5 w-5'></ArrowLeftIcon>
              Back to Notes
            </Link>
            <button onClick={handleDeleteFunction} className='btn btn-error btn-outline'>
              <Trash2Icon className='h-5 w-5'></Trash2Icon>
              Delete Note
            </button>
          </div>

          <div className='card bg-base-100'>
            <div className='card-body'>
              <div className='form-control mb-4'>
                <label className='label'>
                  <span className='label-text'>Title</span>
                </label>
                <input type='text' placeholder='Note title'
                className='input input-bordered'
                value={note.title}
                onChange={(e)=> setNote({...note, title: e.target.value})}
                ></input>
                <label className='label'>
                  <span className='label-text'>Content</span>
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered h-32"
                  value={note.content}
                  onChange={(e) => setNote({ ...note, content: e.target.value })}
                  />
              </div>

              <div className='card-actions justify-end'>
                  <button className='btn btn-primary' disabled={saving} onClick={handleSaving}>
                    {saving ? "Saving..." : "Save Changes"}
                  </button>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default NoteDetailPage