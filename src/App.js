import Header from "./components/Header/Header.jsx";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Qualification from "./components/Qualification/Qualification.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer/Footer.jsx";
import ScrollUp from "./components/ScrollUp/ScrollUp.jsx";
import Projects from "./components/Projects/Projects.jsx";


function App() {
  return (
    <>

      <Header />

      <main>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Qualification/>
        <Contact/>
      </main>

      <Footer/>
      <ScrollUp/>
      <Toaster/>
    </>
  );
}

export default App;
