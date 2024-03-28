import { useState } from "react"

import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n,winCondition}){
    let [ticket,setTicket] = useState(genTicket(n));
    let isWinning= winCondition(ticket);


    let buyTicket =()=>{
        setTicket(genTicket(n));
    }
    return(
        <div>
            <h1>Lottery Game</h1>
             <Ticket ticket={ticket}/>
            
            <h3>{isWinning && " Congratulations You Won"}</h3>
            <button onClick={buyTicket}>Buy Tickets</button>
        </div>
    )
}