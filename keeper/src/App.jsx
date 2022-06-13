import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Note from "./components/note/Note";
import "./styles.scss";

const App = () => {
    return (
        <div id="App">
            <Header></Header>
            <Note></Note>
            <Footer></Footer>
        </div>
    );
};

export default App;
