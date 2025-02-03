import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Tools from "./pages/Tools";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1 className="text-center text-2xl">Home Page</h1>} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </Router>
  );
}

export default App;
