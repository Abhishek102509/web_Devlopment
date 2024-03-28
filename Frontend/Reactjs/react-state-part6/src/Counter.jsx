import { useEffect, useState } from "react";


function Counter(){
    // let [stateVariable,setStateVariable] =useState(0);
    let [count, setCount] =useState(0);  //initialization
    //  console.log("component is re-rendered");
    //  console.log(`count=${count}`);

    // console.log(arr)
    const inCount=()=>{
        setCount((currCount) => currCount+1);
        // console.log(`inside incCount,count =${count}`)
        // console.log(count);

    };
    useEffect(function sideEffect(){
        console.log("this is the side effect");
    }) ; 


    return (
        <div>
             <h3>count={count}</h3>
             <button onClick={inCount}> Increase Count</button>
        </div>

    );


}
export default Counter;