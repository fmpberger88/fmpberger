import '../App.css'
import Header from "./Header/Header.jsx";
import About from "./About/About.jsx";
import Tools from "./Tools/Tools.jsx";
import Projects from "./Projects/Projects.jsx";
import Footer from "./Footer/Footer.jsx";
import ContactFormular from "./ContactFormular/ContactFormular.jsx";

function Root() {

    return (
        <div className="App">
            <Header />
            <About />
            <Tools />
            <Projects />
            <ContactFormular />
            <Footer />
        </div>
    )
}

export default Root
