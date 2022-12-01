import React from "react";
// import Button from "@material-ui/core/Button";
import DeleteOutLineIcon from "@material-ui/icons/DeleteOutlined";

const Note = (props) => {
    const deleteNote = ()=>{
        props.deleteItem(props.id)
    }

    return (<>
        <div className="note">
            <h1>{props.title} </h1>
            
            <p>{props.content} </p>
            <button onClick={deleteNote} className="btn" >
            <DeleteOutLineIcon className="plus_sign" />
            </button>
        </div>


    </>);
};
export default Note;