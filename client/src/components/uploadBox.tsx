interface UploadBoxProps {
  label: string;
  onChange: (uploadedFile: File) => void;
}

const UploadBox: React.FC<UploadBoxProps> = ({ label, onChange }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onChange(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col">
      <label className="mb-2 font-medium">{label}</label>
      <input
        type="file"
        onChange={handleFileChange}
        className="border p-2 rounded"
      />
    </div>
  );
};

export default UploadBox;
