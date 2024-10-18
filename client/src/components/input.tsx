import React, { forwardRef, useState, InputHTMLAttributes } from 'react';
import { clsxm } from '../utils/clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  inputType?: string;
  variant?: 'big' | 'small'; // You can extend this if you have more variants
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, value, inputType = 'text', className, variant = 'big', errorMessage = '', ...rest }, ref) => {
    const [isInvalid, setIsInvalid] = useState(false);

    // Function to validate the input and set the error state
    const handleValidation = (e: React.FocusEvent<HTMLInputElement>) => {
      const { value } = e.target;

      // Simple validation for demo purposes
      if (!value || value.trim() === '') {
        setIsInvalid(true);
      } else {
        setIsInvalid(false);
      }

      // If there's an onChange event passed in, call it as well
      if (rest.onChange) {
        rest.onChange(e);
      }
    };

    return (
      <div className="flex flex-col">
        {label && <label className="mb-1 text-gray-600">{label}</label>} {/* Label above input */}
        <input
          ref={ref}
          className={clsxm(
            variant === 'big' ? 'w-[350px] border-2 rounded-sm px-2 py-1 focus:outline-none focus:ring-2' : 
            'w-[170px] border-2 rounded-sm px-2 py-1 focus:outline-none focus:ring-2',
            isInvalid ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500', // Validity styles
            className // Include any additional classes passed in
          )}
          type={inputType}
          value={value}
          onBlur={handleValidation} // Validate when the input loses focus
          {...rest} // Spread any other props (like onChange, placeholder, etc.)
        />
        {isInvalid && <p className="mt-1 text-red-500 text-sm">{errorMessage || 'Invalid input'}</p>} {/* Error message */}
      </div>
    );
  }
);

Input.displayName = 'CustomInput';

export default Input;