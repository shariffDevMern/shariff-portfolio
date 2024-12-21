import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DrawerAppBar from "./components/DrawerAppBar";
import Home from "./components/Home";
import About from "./components/About";
import Background from "./components/Background";
import Projects from "./components/Projects";

function App() {
  return (
    <Background>
      <BrowserRouter>
        <DrawerAppBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

        </Routes>
      </BrowserRouter>
    </Background>
  );
}

export default App;
