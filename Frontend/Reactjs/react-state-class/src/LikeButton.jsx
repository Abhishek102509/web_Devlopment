import { useState } from "react";

function LikeButton(){
let[isLiked,setIsLiked] =useState(false);
    let toggleLike=()=>{
        setIsLiked(!isLiked);


        // let newVal =!isLiked;
        // console.log("newVal")
        
    };
    let likestyle = {color: "red"};
    return(
        <div>
            <p onClick={toggleLike}> 
            {
                isLiked ? (
                <i className="fa-solid fa-heart" style={likestyle}></i>
                ) :(
                <i className="fa-regular fa-heart"></i>)}

                </p>
                
            
            
        </div>
    )

}

export default LikeButton;