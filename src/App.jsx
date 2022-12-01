import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = (note) => {
    const [addItem, setAddItem] = useState([]);
    const addNote = (note) => {
        return setAddItem((prevData) => {
            return [...prevData, note];
        })
    };
    const onDelete = (id) => {
        setAddItem((oldData) => {
            oldData.filter((currentData, index) => {
                return index !== id;
            })
        });

    }
    return <>
        <Header />
        <CreateNote
            passNote={addNote}
        />
        {addItem.map((val, index) => {
            return (<Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
            />)
        })}
        <Footer />
       
    


    </>;
};
export default App;