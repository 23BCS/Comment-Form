import React, { useState } from 'react'

function CommentForm() {
    const [formData ,setFormData] = useState({
        userName:"",
        remark:"",
        rating:5,
    })
    const handleInputChange =(event)=>{
        setFormData((currData)=>{
            const fieldName= event.target.name;
            const newValue =event.target.value;
            return{
             
                ...currData ,[fieldName]:newValue 
            }
        })
    }

    const handleSubmit = (event)=>{
event.preventDefult();
setFormData({
    userName:"",
        remark:"",
        rating:5,
})
    }
  return (
    <div>
        <h1>Give a comment</h1>
       <form  onSubmit={handleSubmit}>
        <label htmlFor="username">UserName</label>
       <input placeholder='userName ' 
        type="text" 
        value={formData.userName} 
         onChange={handleInputChange} 
         id='username'
         name='userName'
         />
        <br /><br /><br /><br />
        <label htmlFor="remark">Remark</label>
        <textarea
         placeholder='remark' 
          value={formData.remark} 
          onChange={handleInputChange}
           id='remark'
           name='remark'> 
           </textarea>
        <br /><br /><br /><br />
        <label htmlFor="rating">Rating</label>
        <input
         type="number" 
         placeholder='rating'
         min={1} max={5} 
         value={formData.rating} 
         onChange={handleInputChange} 
         id='rating'
         name='rating'
         />
        <button>Add Comment</button>
       </form>
      
    </div>
  )
}

export default CommentForm
