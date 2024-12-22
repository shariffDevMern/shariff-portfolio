import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DrawerAppBar from "./components/DrawerAppBar";
import Home from "./components/Home";
import About from "./components/About";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <Background>
      <BrowserRouter>
        <DrawerAppBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Background>
  );
}

export default App;
