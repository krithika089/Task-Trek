import React,{useState} from "react";

 const CreateToDo = () => {
    const [count, setCount] = useState(0);
    const [text,setCountOfText]=useState("");  
    const task = ["Task 1","Task 2","Task 3"];
    const handleClick = () =>{
        setCount(count + 1);
    } 
    const handleChange = (event) =>{
        setCountOfText(event.target.value);
    }
    return(
            <>
            <h1>Tasks : {count}</h1> 
            <input type="text" onChange={handleChange}></input>
            <button onClick={handleClick}>Add Task</button>
            <h1>Input is {text}</h1>
            <ol>
                {
                    task.map(task => <li key={task}>{task}</li>)
                }
            </ol>

            </>
        )
    
}
export default CreateToDo;