import { useState } from "react";

function Form(){
    let [formData,setFormData] =useState({
        fullName:" ",
        userName: " ",
        password: " ",

    });
   

//     let handleNameChange = (event) =>{
// // console.log(event.target.value)
//   setFullName(event.target.value);
//     }
//     let handleUserName = (event) =>{
// // console.log(event.target.value)
//   setUserName(event.target.value);
//     }

let handleInputChange=(event)=>{
    let fieldName=event.target.name;
    let newValue=event.target.value;

   setFormData((currData)=>{
          currData[fieldName]=newValue;
          return {...currData};
   });
}

let handleSubmit=(event)=>{
    event.preventDefault();
    setFormData({
        fullname:"",
        username:"",
        password:"",
    })
    console.log(formData);
}



    return(
        <form  onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input 
             placeholder="Enter username"
             type="text"
             value={formData.username}
             onChange={handleInputChange} 
             id="username"
             name="username"
            />
              <br /><br />
            <label htmlFor="fullname">Full Name</label>
            <input 
             placeholder="Enter full name"
             type="text" 
             value={formData.fullname}
             onChange={handleInputChange} 
             id="fullname"
             name="fullname"
            />
              <br /><br />
            <label htmlFor="password">Password</label>
            <input 
             placeholder="Enter Password"
             type="password" 
             value={formData.password}
             onChange={handleInputChange} 
             id="password"
             name="password"
            />
            
            <button>Submit</button>
        </form>
    )
}
export default Form;