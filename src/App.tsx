import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tools from "./pages/Tools";
import Header from "./components/Header";
import CodeSnippets from './pages/CodeSnippets';
import NumberConverter from './components/tools/NumberConverter';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1 className="text-center text-2xl">Home Page</h1>} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/converter" element={<NumberConverter />} />
        <Route path="/code-snippets" element={<CodeSnippets />} />
      </Routes>
    </Router>
  );
}

export default App;
