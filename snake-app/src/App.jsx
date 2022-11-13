import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SnakeI, SnakeII } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/snake1" element={<SnakeI />} />
        <Route path="/snake2" element={<SnakeII />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
