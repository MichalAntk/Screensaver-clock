import React, { useState } from "react";
import "./Notes.css";

const Notes = () => {
    const [note, setNote] = useState("");
    const [notes, setNotes] = useState([]);

    const addNote = () => {
        if (note.trim() === "") return;
        setNotes([...notes, note]);
        setNote("");
    };

    return (
        <div className="notes-container">
            <input 
                type="text"
                placeholder="Zadaj poznámku"
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
            <button onClick={addNote}>Pridať</button>  

            <div className="notes-list">
                {notes.map((n, index) => (
                <div key={index} className="note-item">
                    {n}
                </div>
                ))}
            </div>  
        </div>
    );
};

export default Notes;