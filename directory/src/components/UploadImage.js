import React, {  useState } from "react";
import ProgressBar from "./ProgressBar"
export default function UploadImage() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
//   const { progress, url } = useStorage(file);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };


  return (
    <div>
      <div className="fallback">
        <div className="custom-file">
          <input
            className="custom-file-input"
            id="projectCoverUploads"
            type="file"
            onChange={handleChange}
          />
          <label className="custom-file-label" htmlFor="projectCoverUploads">
            {error && <div>{error}</div>}
            {file && <div>{file.name}</div>}
            <ProgressBar file={file} setFile={setFile}/>
          </label>
        </div>
      </div>
      {/* <form>
        <label>
          <input type="file" onChange={handleChange} />
          <span>+</span>
        </label>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
        </div>
      </form> */}
    </div>
  );
}
