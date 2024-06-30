import React from "react";
import './TaskColumns.css';
import TaskCard from "./TaskCard";

const TaskColumns = ({ colName, icon, tasks, status, handleTask}) => {
    return(
        <section className='task_column'>
            <h1 className="task_column_title">
                <img className="task_column_icon" src={icon} alt="" />
                {colName}
            </h1>
            {
                tasks.map((task,index) => task.status === status && 
                <TaskCard 
                            key={index}
                            colName={task.task}
                            selectedTag={task.tags}
                            index={index}
                            handleTask ={handleTask}
                            
                />)
               
            }
           
        </section>
    );
   
}

export default TaskColumns;