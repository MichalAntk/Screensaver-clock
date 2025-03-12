import React, { useState } from "react";
import CustomButton from "../buttons/CustomButton";
import "./Notes.css";

const Notes = () => {
    const [note, setNote] = useState("");
    const [notes, setNotes] = useState([]);

    const addNote = () => {
        if (note.trim() === "") return;
        setNotes([...notes, note]);
        setNote("");
    };

    const deleteNote = (index) => {
        setNotes(notes.filter((_,i) => i !== index));
    }

    return (
        <div className="notes-container">
            <input 
                type="text"
                placeholder="help me remember..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
            <CustomButton onClick={addNote} variant="primary" size="medium">
                Add Note
            </CustomButton>  

            <ul className="notes-list">
                {notes.map((note, index) => (
                    <li key={index} className="note-item">
                        {note}
                        <CustomButton 
                        onClick={() => deleteNote(index)} 
                        variant="primary" 
                        size="medium">
                            X
                        </CustomButton>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notes;