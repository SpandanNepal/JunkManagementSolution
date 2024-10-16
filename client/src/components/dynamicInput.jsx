import React, { useState } from 'react';
import { clsxm } from '../utils/clsx';

const DynamicInput = ({ label, className, variant = 'big' }) => {
  const [inputs, setInputs] = useState(['']); 

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const addInput = () => {
    setInputs([...inputs, '']); 
  };

  const removeInput = (index) => {
    if (inputs.length > 1) { 
      const newInputs = inputs.filter((_, i) => i !== index);
      setInputs(newInputs);
    }
  };

  return (
    <div className="flex flex-col">
      <label className="mb-1 text-gray-600">{label}</label>
      {inputs.map((inputValue, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            className={clsxm(
              variant === 'big' ? 'w-[350px] border-2 rounded-sm px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500' :
              'w-[170px] border-2 rounded-sm px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500',
              className // Include any additional classes passed in
            )}
            type="text"
            value={inputValue}
            placeholder={`Enter ${label.toLowerCase()}`}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
          {inputValue && (
            <span
              onClick={() => removeInput(index)}
              className="ml-2 text-red-500 cursor-pointer"
            >
              &times; {/* Cross sign to delete the input */}
            </span>
          )}
        </div>
      ))}
      <button
        onClick={addInput}
        className="mt-2 text-blue-500 hover:underline"
      >
        Add More +
      </button>
    </div>
  );
};

export default DynamicInput;
