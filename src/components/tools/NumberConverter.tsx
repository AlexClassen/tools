import React, { useState } from "react";

const NumberConverter = () => {
  const [decimal, setDecimal] = useState("10");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setDecimal(value);
    }
  };

  const decimalNumber = decimal ? parseInt(decimal, 10) : 0;
  const binary = decimalNumber.toString(2);
  const hex = decimalNumber.toString(16).toUpperCase();

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">Decimal to Binary & Hex Converter</h2>
      <input
        type="text"
        value={decimal}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter a decimal number"
      />
      <div className="mt-4">
        <p className="text-lg">Binary: <span className="font-mono text-blue-600">{binary}</span></p>
        <p className="text-lg">Hexadecimal: <span className="font-mono text-green-600">{hex}</span></p>
      </div>
    </div>
  );
};

export default NumberConverter;
