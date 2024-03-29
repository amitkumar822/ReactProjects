import React, { useState } from "react";

function TodoList() {
  let [todolist, setTodolist] = useState([]);

  let saveToDoList = (event) => {
    let toDoName = event.target.toDoName.value;
    if (!todolist.includes(toDoName)) {
      let finalToList = [...todolist, toDoName];
      setTodolist(finalToList);
    } else {
      alert(`${toDoName} Allready exists...`);
    }

    event.preventDefault();
  };

  let list = todolist.map((value, index) =>{
    return(
      <ToDoListItems value={value} key={index} indexNumber={index} todolist={todolist} setTodolist={setTodolist}/>
    )
  })

  return (
    <>
      <div className="container">
        <h1>ToDo List</h1>
        <form onSubmit={saveToDoList}>
          <input type="text" name="toDoName" />
          <button>Save</button>
        </form>

        <div className="toDoOuterDiv">
          <ul>
            
            {list}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoList;

function ToDoListItems({value,indexNumber,todolist,setTodolist}) {
  // console.log(indexNumber);
  let [status,setStatus] = useState(false);

  let deletRow =()=>{
    let finalData = todolist.filter((value,idx) => idx!=indexNumber)
    setTodolist(finalData)
  }

  let checkStatus=()=>{
    setStatus(!status)
  }
  
  return (
    <li className={(status) ? 'completToDo' : ''} onClick={checkStatus}>
      {indexNumber+1} {value} <span onClick={deletRow}>&times;</span>
    </li>
  );
}
