import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const [expand, setExpand] = useState(false)
    const InputEvent =(event)=>{
        const {name, value} = event.target;
        setNote((prevData)=>{
            return{
                ...prevData,
                [name] :value,
            }
        })
    };
    const AddEvent= () =>{
        props.passNote(note);
    }
    const expandIt = ()=>{
        setExpand(true);
    }
    const btoNormal = ()=>{
        setExpand(false);
    }
    return (<>
        <div className="main_note">
            <form>
                {expand ? (
                    <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off" />
                ) : null }
                <textarea rows="" onClick={expandIt} onDoubleClick={btoNormal} column="" name="content" value={note.content} onChange={InputEvent} placeholder="Write a Note"></textarea>
                <Button onClick={AddEvent} >
                    <AddIcon className="plus_sign" />
                </Button>
            </form>
        </div>


    </>);
};
export default CreateNote;