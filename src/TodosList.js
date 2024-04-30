import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleToggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>TODO List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;


// import React from 'react'
// import { useState } from 'react'

// const TodosList = () => {
//     const [todo,setTodo]=useState('')
//     const [todos,setTodos]=useState([])
//     const [toggle,setToggle]=useState(false)

//     function HandleSubmit(e){
//         e.preventDefault()
//         setTodos((prevTodos)=>{
//             return({
//                 ...prevTodos,...todo
//             }
               
//             )
//         })
//         console.log(todos)
//     }

    
//   return (
    
//     <div>
//         <h1>Todo List</h1>
//         <form>
        
//         <input placeholder='enter todo' onChange={(e)=>{ setTodo(e.target.value)}} />
//         <button onClick={HandleSubmit}>Submit Todo</button>
//         </form>
//     </div>
//   )
// }

// export default TodosList