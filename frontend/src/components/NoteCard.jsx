import { PenSquare, Trash2Icon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import { formateDate } from '../lib/utils'
import toast from 'react-hot-toast'
import axios from 'axios'
const NoteCard = ({note, setNotes}) => {

    const handleDelete = (e, id)=>{
        e.preventDefault(); //! get ride of navigation behaviour

        if(!window.confirm("Are you sure you want to delete this note?")) return;

        try{
            const deleteNote = async()=>{
                const res = await axios.delete(`https://thinkboard-backend.netlify.app/api/notes/${id}`)
                //! get ride of deleted note
                setNotes((prev)=> prev.filter(notes=> notes._id != id))
                toast.success("Note deleted successfully!")
            }
            deleteNote()
        }
        catch(error){
            console.log("Error in handleDelete")
            toast.error("Failed to delete note")

        };
        
    }
  return (
    <Link to={`/note/${note._id}`}
    className='card bg-base-100 hover:shadow-lg transition-all duration-200
    border-t-4 border-solid border-[#00FF9D]'
    >
        <div className='card-body'>
                <h3 className='card-title text-base-content'>{note.title}</h3>
                <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
                <div className='card-actions justify-between items-center mt-4'>
                    <span className='text-sm text-base-content/60'>
                        {formateDate(new Date(note.createdAt))}
                    </span>
                    <div className='flex items-center gap-1'>
                            <PenSquare className='size-4'></PenSquare>
                            <button className='btn btn-ghost btn-xs text-error' onClick={(e)=>{ handleDelete(e, note._id)}}>
                                <Trash2Icon className='size-4'></Trash2Icon>
                            </button>
                    </div>
                </div>
        </div>

    </Link>
  )
}

export default NoteCard