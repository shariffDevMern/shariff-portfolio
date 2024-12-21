import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DrawerAppBar from "./components/DrawerAppBar";
import Home from "./components/Home";
import About from "./components/About";
import Background from "./components/Background";

function App() {
  return (
    <Background>
      <BrowserRouter>
        <DrawerAppBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Background>
  );
}

export default App;
