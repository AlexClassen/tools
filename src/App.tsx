import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tools from "./pages/Tools";
import Header from "./components/Header";
import CodeSnippets from "./pages/CodeSnippets";
import NumberConverter from "./components/tools/NumberConverter";

const tools = [
  { path: "/tools/converter", component: NumberConverter },
];

function App() {
  
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
          <div className="p-12">
            <Routes>
              <Route path="/" element={<h1 className="text-center text-2xl">Home Page</h1>} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/code-snippets" element={<CodeSnippets />} />

              {tools.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
