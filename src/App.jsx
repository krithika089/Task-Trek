import React, { useState ,useEffect } from 'react'

import './App.css'
import TaskForm from './Components/TaskForm';
import TaskColumns from './Components/TaskColumns';
import todo from "./assets/direct-hit.png"
import done from "./assets/check-mark-button.png"
import inprogress from "./assets/glowing-star.png"
 
const App = () =>{
  const tasksFromLocal =   localStorage.getItem("tasks");
  
  const [tasks,selectTags] = useState(JSON.parse(tasksFromLocal) || []);
  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
  } ,[tasks] )

  const handleTask = (taskIndex) =>{
    const filteredtask = tasks.filter((task,index) => index !== taskIndex )
    selectTags(filteredtask);
  }
  return(
    <div className='app'>
      <TaskForm selectTags ={selectTags}/>
      <main className='app_main'>
        <TaskColumns 
          colName="To Do" icon={todo} 
          tasks ={tasks} status = "To Do" handleTask ={handleTask}/>
        <TaskColumns 
          colName="In Progress" icon={inprogress}
          tasks ={tasks} status = "In Progress" handleTask ={handleTask}/>
        <TaskColumns 
          colName="Done" icon={done}
          tasks ={tasks} status = "Done" handleTask ={handleTask}/>
      </main>
    </div>
  );
}

export default App
