const FileUpload = ({ onFileChange }) => {
    const [file, setFile] = useState(null);
  
    const handleFileSelection = (event) => {
      setFile(event.target.files[0]);
    };
  
    const handleUpload = async () => {
      if (!file) return;
  
      onFileChange(file);
    };
  
    return (
      <div>
        <input type="file" onChange={handleFileSelection} />
        <button onClick={handleUpload}>Analyze Text</button>
      </div>
    );
  };
  
  export default FileUpload;