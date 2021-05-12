import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const allowedFiles = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    const selected = e.target.files[0];
    if (selected && allowedFiles.find((file) => file === selected.type)) {
      //   console.log("selected");
      setFile(selected);
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
      console.log("choose different file");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
