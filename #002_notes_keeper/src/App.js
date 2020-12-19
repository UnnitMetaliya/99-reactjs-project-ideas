import React, { useState } from 'react';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import './App.css';

function App() {
    const [notes, setNotes] = useState([]);

    const addNoteHandler = (newNote) => {
        let notesData;
        setNotes((prevNote) => {
            notesData = [...prevNote, newNote];
            return notesData;
        });
        localStorage.setItem('notesData', JSON.stringify(notesData));
    }

    let notesData = JSON.parse(localStorage.getItem('notesData'));
    if (notesData === null) {
        notesData = [];
    }
    console.log(notesData);

    const deleteNoteHandler = (id) => {
        setNotes((prevNote) => {
            return prevNote.filter((note, index) => {
                return index !== id;
            });
        });
        notesData.splice(id, 1);
        localStorage.setItem("notesData", JSON.stringify(notesData));
    }


    return (
        <div>
            <Header />
            <CreateArea onAdd={addNoteHandler} />
            <div className="notes">
                {notesData.map((note, ind) => {
                    return (<Note
                        key={ind}
                        id={ind}
                        title={note.title}
                        content={note.content}
                        onDelete={deleteNoteHandler}
                    />)
                })}
            </div>
        </div>
    );
}

export default App;
