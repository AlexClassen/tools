import { Button } from "@headlessui/react";
import { useState } from "react";

const snippets = [
  {
    id: 1,
    title: "React Component",
    code: `const MyComponent = () => {
  return <div>Hello, world!</div>;
};`
  },
  {
    id: 2,
    title: "Fetch API Example",
    code: `fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));`
  },
  {
    id: 3,
    title: "JavaScript Arrow Function",
    code: `const add = (a, b) => a + b;`
  }
];

const CodeSnippets = () => {
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (code: any, id: any) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Code Snippets</h1>
      <div className="space-y-4">
        {snippets.map(({ id, title, code }) => (
          <div key={id} className="border rounded-lg p-4 bg-gray-100 relative">
            <h2 className="font-semibold mb-2">{title}</h2>
            <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
              <code>{code}</code>
            </pre>
            <Button
              onClick={() => copyToClipboard(code, id)}
              className="absolute top-2 right-2 flex items-center gap-2"
            >
              {copiedId === id ? "Copied!" : "Copy"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeSnippets;