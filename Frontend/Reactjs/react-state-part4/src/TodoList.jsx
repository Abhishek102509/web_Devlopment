import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';



function TodoList(){
    let  [todos,setTodos] =useState([{task : "sample-task", id:uuidv4 , isDone :false}]);

    let [newTodo,setNewTodo] = useState("");
let addNewTask =()=>{

    setTodos((prevTodos)=>{
        return [...prevTodos,{task : newTodo ,id : uuidv4() , isDone :false}]
    })
    setNewTodo("");
    // console.log("we have to add new task in todo"); 
}

let updateTodoValue = (event)=>{
   setNewTodo(event.target.value);

};

let deleteTodo = (id) => {
    setTodos ((prevTodos) => todos.filter((prevTodos)=> prevTodos.id != id ));
    // console.log(copy);
};

let upperCaseAll = ()=>{
    setTodos((prevTodos)=>
    prevTodos.map((todo)=>{
        return {
            ...todo,
            task:todo.task.toUpperCase(),
        };
    }));

};

 let upperCaseOne = (id)=>{
    setTodos((prevTodos)=>
    prevTodos.map((todo)=>{
        if(todo.id === id){
            return{
                ...todo,
                task : todo.task.toUpperCase(),
            };
        }else{
            return todo;
        }
    })
    );
 }


 let markAsDone = (id)=>{
    setTodos((prevTodos)=>
    prevTodos.map((todo)=>{
        if(todo.id === id){
            return{
                ...todo,
                isDone :true,
            };
        }else{
            return todo;
        }
    })
    );
 }

    return(
        <div>
            <input placeholder="add a task" type="text" 
            value={newTodo} 
            onChange={updateTodoValue} />
            <br />
            <button onClick={addNewTask} >Add Task</button>
            <br /><br />
            <hr />
            <h3>Todo List</h3>
            <ul>
              {
                   todos.map((todo)=>(
                   
                   <li key = {todo.id}>
                    <span style={todo.isDone ? {textDecorationLine: "line-through"}: {}}> 
                    {todo.task}
                    </span>
                    &nbsp;  &nbsp;  &nbsp;  &nbsp; 
                    <button onClick={()=> deleteTodo(todo.id)} >delete</button>
                    <button onClick={()=> upperCaseOne(todo.id)} >UpperCaseOne</button>
                    <button onClick={()=> markAsDone(todo.id)} >Mark As Done </button>
                    
                   </li>
                   ))
                
              }

            </ul>
            <button onClick={upperCaseAll}>UpperCaseAll</button>
        </div>
    )
};

export default TodoList;