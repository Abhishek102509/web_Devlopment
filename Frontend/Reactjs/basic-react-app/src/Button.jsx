function handlClick(){
    console.log("button was Clicked");
}
function handleHover(){
    console.log("Hover");
}
function handledblCkick(){
    console.log("you double Click");
}
function Button(){
    return(
        <div>
            <button onClick={handlClick} >Click Me </button>

            <button onMouseOver={handleHover} >Hover Over Me </button>
            
            <button onDoubleClick={handledblCkick} >DblClick me</button>
        </div>
        
    )
}



export default Button;