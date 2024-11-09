import React, { forwardRef, useState, InputHTMLAttributes } from 'react';
import { clsxm } from '../utils/clsx';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string;
  inputType: 'text' | 'password' | 'email' | 'number' | 'date' | 'select'; // Restrict input types
  className?: string;
  variant?: 'big' | 'small'; 
  errorMessage?: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, value, inputType, className = '', variant = 'big', errorMessage = '', ...rest }, ref) => {
    const [isInvalid, setIsInvalid] = useState(false);

    const handleValidation = (e: React.FocusEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setIsInvalid(!value || value.trim() === '');
      if (rest.onChange) {
        rest.onChange(e);
      }
    };

    return (
      <div className="flex flex-col w-full">
        {label && <label className="mb-1 text-gray-600">{label}</label>} {/* Label above input */}
        <input
          ref={ref}
          className={clsxm(
            variant === 'big' ? 'w-full border-2 rounded-sm px-2 py-1 focus:outline-none focus:ring-2' : 
            'w-[170px] border-2 rounded-sm px-2 py-1 focus:outline-none focus:ring-2',
            isInvalid
              ? 'border-red-500 focus:ring-red-500' 
              : 'focus:ring-blue-500', 
            className 
          )}
          type={inputType}
          value={value}
          onBlur={handleValidation} 
          onChange={(e) => {
            if (rest.onChange) {
              rest.onChange(e);
            }
            setIsInvalid(false); 
          }}
          aria-invalid={isInvalid}
          aria-describedby={isInvalid ? 'error-message' : undefined}
          {...rest} 
        />
        {isInvalid && (
          <p id="error-message" className="mt-1 text-red-500 text-sm">{errorMessage || 'Required to continue'}</p> // Error message
        )}
      </div>
    );
  }
);

CustomInput.displayName = 'CustomInput';

export default CustomInput;
