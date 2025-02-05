import { Link } from "react-router-dom";
import { CalculatorIcon } from "@heroicons/react/24/solid"; // Example icons

const tools = [
  {
    name: "Number Converter",
    description: "Convert numbers between different bases.",
    route: "/tools/converter",
    icon: CalculatorIcon,
  },
];

const Tools = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tools</h1>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <li key={tool.route} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow-sm">
            <div className="flex items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <tool.icon className="size-6 text-gray-600" />
                  <h3 className="truncate text-lg font-medium text-gray-900">{tool.name}</h3>
                </div>
                <p className="mt-1 text-sm text-gray-500">{tool.description}</p>
              </div>
            </div>
            <div className="-mt-px flex">
              <Link
                to={tool.route}
                className="relative w-full text-center py-4 text-sm font-semibold text-gray-900 hover:bg-gray-100"
              >
                Open Tool
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tools;
