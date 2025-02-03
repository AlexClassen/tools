import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tools from "./pages/Tools";
import Header from "./components/Header";

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
