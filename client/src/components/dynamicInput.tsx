import React, { useState } from 'react';

interface DynamicInputProps {
  label: string;
  placeholder?: string; 
  variant?: string;
  value: string[];
  onChange: (value: string[]) => void;
}

const DynamicInput: React.FC<DynamicInputProps> = ({
  label,
  placeholder = '',
  variant = '',
  value,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleAddService = () => {
    if (inputValue.trim()) {
      onChange([...value, inputValue]);
      setInputValue(''); 
    }
  };

  const handleRemoveService = (index: number) => {
    const updatedServices = value.filter((_, i) => i !== index);
    onChange(updatedServices);
  };

  return (
    <div className={`flex flex-col ${variant}`}>
      <label className="mb-2 font-medium">{label}</label>
      <div className="flex space-x-2">
        <input
          type="text"
          aria-label="input field"
          className="border p-2 rounded"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="button"
          onClick={handleAddService}
          className="p-2 bg-blue-800 text-white rounded"  // Darker blue for better contrast
        >
          Add
        </button>
      </div>
      <ul className="mt-2">
        {value.map((service, index) => (
          <li key={index} className="flex justify-between items-center">
            {service}
            <button
          type="button"
          onClick={() => handleRemoveService(index)}
          className="text-red-800 p-1"
        >
          Remove
        </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicInput;
