import { useState } from "react";

  

  function Joker(){
    let [joke, setJoke] = useState({});
const URL = "https://joke.deno.dev/";

const getNewJoke =async()=>{
   let response=  await fetch(URL);
   let jsonResponse =await response.json();
   console.log(jsonResponse);
   setJoke({setup: jsonResponse.setup,punchline:jsonResponse.punchline})

}

    return(
        <div>

            <h1>Jokes</h1>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke} >new Joke</button>
        </div>
    )
  }
  export default Joker;