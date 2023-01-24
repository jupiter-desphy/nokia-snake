import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome, Menu, SnakeI, SnakeII } from "./pages";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { ThemeProvider } from './components/ThemeContext';

function App() {



  return (
      // <div id="dark">

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/snake1" element={<SnakeI />} />
          <Route path="/snake2" element={<SnakeII />} />
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
