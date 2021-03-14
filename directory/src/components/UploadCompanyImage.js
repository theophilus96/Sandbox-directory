import React, {  useState } from "react";
import CompanyProgressBar from "./CompanyProgressBar";

export default function UploadCompanyImage(DocRefID) {
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
          <label className="custom-file-label" for="projectCoverUploads">
            {error && <div>{error}</div>}
            {file && <div>{file.name}</div>}
            <CompanyProgressBar file={file} setFile={setFile} DocRefID={DocRefID}/>
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
