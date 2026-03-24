import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
