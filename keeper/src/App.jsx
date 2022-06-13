import { useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import InputNote from "./components/input-note/InputNote";
import Note from "./components/note/Note";
import "./styles.scss";

const App = () => {
    const [notes, setNotes] = useState([]);

    const addNote = (note) => {
        setNotes(prev => [...prev, note])
    };

    const deleteNote = (id) => {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        });
    };

    return (
        <div id="App">
            <Header></Header>
            <InputNote addNote={addNote}></InputNote>
            <div className="notes">
                {notes.map((note, index) => {
                    return <Note title={note.title} content={note.content} id={index} key={index} onDelete={deleteNote} />
                })}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default App;
