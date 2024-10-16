import React, { useState } from 'react';
import { clsxm } from '../utils/clsx'; // Assuming you are using clsxm for class handling

const UploadComponent = () => {
  const [files, setFiles] = useState([]);
  
  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles([...files, ...uploadedFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Prevent the default browser behavior when dragging over the element
  };

  return (
    <div className="flex flex-col">
      <label className="mb-1 text-gray-600">Upload Picture</label>
      
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className={clsxm(
          'border-dashed border-2 rounded-md p-4 flex flex-col items-center justify-center',
          'border-focusedBlue text-center text-gray-500 cursor-pointer'
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mb-2 text-focusedBlue"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>

        <p>Drop here to attach or upload</p>
        <p className="text-sm text-gray-400">max size: 400MB</p>

        {/* Hidden input to allow file selection */}
        <input
          type="file"
          multiple
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>

      {/* Preview selected or uploaded files */}
      <div className="mt-4">
        {files.length > 0 && (
          <ul>
            {files.map((file, index) => (
              <li key={index} className="text-sm text-gray-600">
                {file.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UploadComponent;
