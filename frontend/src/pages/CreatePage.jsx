import React, {useState} from 'react'

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = ()=>{

  }
  
  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
          <div className='max-w-2xl mx-auto'>
            
          </div>
      </div>
    </div>
  )
}

export default CreatePage