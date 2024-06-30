import React,{useState} from "react";
import './TaskForm.css';
import Tag from "./Tag";


const TaskForm = ({selectTags}) =>{
    const [taskData, setTaskData] = useState({
        task : "",
        status : "To Do",
        tags : [],
    });

    
    const selectTag = (tag) => {
       // console.log(taskData.tags);
        if(taskData.tags.some((item) => item === tag)){
            const filterTags = taskData.tags.filter((item) => item !== tag)
            setTaskData((prev) => {
                return {...prev, tags:filterTags};
            });
        }else{
            setTaskData((prev) => {
                return { ...prev, tags: [...prev.tags, tag] };
            });
        }
    }
   // console.log(taskData.tags);

    const checkTag = (tag) =>{
         return taskData.tags.some((item) => item === tag)
    }

    const handleTask = (e) => {
         const {name,value} = e.target; //object deconstruction
        setTaskData((prev)  => {
            return {...prev, [name]:value};
        });
       // console.log(taskData);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
       // console.log(taskData);
        selectTags(prev => {
            return [...prev , taskData];
        });
        setTaskData({
            task : "",
            status : "To Do",
            tags : [], 
        });
    };
    

    return(
            <header className='app_header'>
            <form onSubmit={handleSubmit}>
                <input 
                name = "task"
                value = {taskData.task}
                type="text" className="task_input" placeholder="Enter you task here!"
                onChange={handleTask}
                >
                </input>
                <div className="task_form_bottom_line">
                    <div>
                    <Tag
                     tagName = 'HTML' selectTag = {selectTag} checkTag = {checkTag("HTML")}/>
                    <Tag
                     tagName = 'CSS' selectTag = {selectTag} checkTag = {checkTag("CSS")}/>
                    <Tag
                     tagName = 'JavaScript' selectTag = {selectTag} checkTag = {checkTag("JavaScript")}/>
                    <Tag 
                    tagName = 'React' selectTag = {selectTag} checkTag = {checkTag("React")}/>
                    </div>
                    <div>
                    <select className="task_status" 
                        name="status"
                        value = {taskData.status}
                        onChange={handleTask}>
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                    
                    <button type='submit' className="task_submit">+ Add Task</button>
                    </div>
                </div>
            </form>
            </header>
        
    );
};

export default TaskForm;