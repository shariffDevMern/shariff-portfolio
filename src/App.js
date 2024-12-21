import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DrawerAppBar from './components/DrawerAppBar';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <BrowserRouter>
    <DrawerAppBar/>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    
    </BrowserRouter>

  );
}

export default App;
