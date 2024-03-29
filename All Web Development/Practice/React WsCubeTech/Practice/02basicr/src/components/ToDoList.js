import React, { useState } from "react";

function TodoList() {
    let [todolist,setTodolist] = useState([]);

    let saveToDoList = (event) =>{

        let toDoName = event.target.toDoName.value;
        if(!todolist.includes(toDoName)){
            let finalDolist = [...todolist,toDoName];
            setTodolist(finalDolist)
        }else{
            alert(`ToDo ${toDoName} Allready exists...`)
        }

        event.preventDefault();
    }
    console.log(todolist);

    let res = todolist.map((toValue,idx)=>{
        return(
            
          <ToDoListItems/>
        )
    })

  return (
    <>
      <div className="container">
        <h1>ToDo List</h1>
        <form onSubmit={saveToDoList}>
          <input type="text" name="toDoName"/>
          <button>Save</button>
        </form>

        <div className="toDoOuterDiv">
          <ul>
            {res}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoList;

function ToDoListItems(){
  // console.log(value);
  return(
    <li>Html <span>&times;</span></li>
  )
}
