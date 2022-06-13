import { useState } from "react";
import "./styles.scss";
import AddIcon from "@material-ui/icons/Add"
import { Fab, Zoom } from "@material-ui/core";

const InputNote = (props) => {
    const [note, setNote] = useState({title:"", content:""});
    const [isExpanded, setIsExpanded] = useState(false);

    const expand = () => {
        setIsExpanded(true);
    }

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
            {isExpanded && <input type="text" name="title" id="title" placeholder="Title" autoComplete="off" onChange={handleChange} value={note.title} />}
            <input type="text" name="content" id="content" placeholder="Take a note..." autoComplete="off" 
                onChange={handleChange} value={note.content} onClick={expand} />
            <Zoom in={isExpanded}><Fab type="submit"><AddIcon></AddIcon></Fab></Zoom>
        </form>
     );
}
 
export default InputNote;