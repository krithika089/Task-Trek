import React from "react";

import "./Tag.css";

const Tag = ({ tagName, selectTag, checkTag}) => {
    const tagStyle ={
        HTML : {backgroundColor : "#7ce891"},
        CSS : {backgroundColor:  "#7ce891"},
        JavaScript : {backgroundColor: "#7ce891"},
        React : {backgroundColor: "#7ce891"} ,
        default : {backgroundColor: "#f5f5f5"}

    }
    return (
        <button
            type='button'
            className='tag'
            style = {checkTag ? tagStyle[tagName] : tagStyle.default }
            onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    );
};

export default Tag;
