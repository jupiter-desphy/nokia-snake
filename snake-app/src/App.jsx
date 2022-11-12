import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SnakeII } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SnakeII />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
