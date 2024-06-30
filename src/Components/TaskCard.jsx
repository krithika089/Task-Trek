import React from "react";
import './TaskCard.css';
import deleteIcon from '../assets/delete.png';
import Tag from "./Tag";

const TaskCard = ({colName ,selectedTag ,handleTask ,index}) => {
    return(
        <article className="taskcard_article">
            <div className="taskCard_tasks">
                <p>{colName}</p>
            </div>
            <div className="taskCard_Tags">
                <div>
                    {
                        selectedTag.map((text,index) => <Tag key={index}  tagName={text} checkTag/> )
                    }
                </div>
                <div onClick={() => handleTask(index)}>
                        <img src={deleteIcon} alt ="garbage" className="taskCard_deleteIcon"/>
                </div>
            </div>
        </article>
        
    );
}
export default TaskCard;