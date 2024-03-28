import { useState } from "react";


function Counter(){
    // let [stateVariable,setStateVariable] =useState(0);
    let [count, setCount] =useState(0);  //initialization
     console.log("component is re-rendered");
     console.log(`count=${count}`);

    // console.log(arr)
    let inCount=()=>{
        setCount(count+1)
        console.log(`inside incCount,count =${count}`)
        // console.log(count);

    }


    return (
        <div>
             <h3>count={count}</h3>
             <button onClick={inCount}> Increase Count</button>
        </div>

    );


}
export default Counter;