import { useState } from "react";
import "./styles.scss";

const InputNote = (props) => {
    const [note, setNote] = useState({title:"", content:""});

    const handleSubmit = (e) => {
        props.addNote(note);
        setNote({title:"", content:""});
        e.preventDefault();
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setNote((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    };

    return ( 
        <form className="input-note-form" onSubmit={handleSubmit}>
            <input type="text" name="title" id="title" placeholder="Title" autoComplete="false" onChange={handleChange} value={note.title} />
            <input type="text" name="content" id="content" placeholder="Take a note..." autoComplete="false" onChange={handleChange} value={note.content} />
            <button type="submit">Add</button>
        </form>
     );
}
 
export default InputNote;