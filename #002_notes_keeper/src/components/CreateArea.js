import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [expand, setExpand] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const onChangeHandler = (e) => {
        setNote(prevNote => {
            return {
                ...prevNote,
                [e.target.name]: e.target.value,
            }
        });
    }

    const onClickHandler = (e) => {
        e.preventDefault();
        if (note.title === "" || note.content === "") {
            return;
        }
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
    }

    const textAreaClickHandler = () => {
        setExpand(true);
    }

    return (
        <div>
            <form className="create-note" onSubmit={onClickHandler}>
                {expand && <input
                    name="title"
                    placeholder="Title"
                    onChange={onChangeHandler}
                    value={note.title}
                />}
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows={expand ? 2 : 1}
                    onChange={onChangeHandler}
                    value={note.content}
                    onClick={textAreaClickHandler}
                />
                <Zoom in={expand}>
                    <Fab onClick={onClickHandler}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
