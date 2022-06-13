import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Note from "./components/note/Note";
import notes from "./notes";
import "./styles.scss";

const App = () => {
    return (
        <div id="App">
            <Header></Header>
            <div className="notes">
                {notes.map((note, index) => {
                    return <Note title={note.title} content={note.content} key={index} />
                })}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default App;
