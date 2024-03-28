import { useState } from "react"

function CommentsForm(){
    let [formData,setFormData]=useState({
        username:"",
        remarks:"",
        rating:5,
    });

    let handleInputChange =(event)=>{
        setFormData((currData)=>{
            return{...currData,[event.target.name]:event.target.value};
        });
    };

    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData)
        setFormData({
            username:"",
            remarks:"",
            rating:5,
        })
    }
 return (
    <div>
       
        <h4>Give a Comment</h4>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="username" value={formData.username} onChange={handleInputChange} id="username" name="username"/>

            <br /><br />

           <label htmlFor="remarks">Remarks</label>
           <textarea name="remarks" id="remarks" cols="30" rows="10" placeholder="Remarks" value={formData.remarks} onChange={handleInputChange}  ></textarea>

           <br /><br />

            <label htmlFor="rating">Rating</label>
            <input type="number" placeholder="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} id="rating" name="rating"/>

            <br /><br />

            <button>Add Comment</button>
        </form>
    </div>
 )
}

export default CommentsForm;