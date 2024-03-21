import './App.css'
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Tools from "./components/About/Tools/Tools.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {

  return (
    <div>
        <Header />
        <About />
        <Tools />
        <Projects />
        <Footer />
    </div>
  )
}

export default App
