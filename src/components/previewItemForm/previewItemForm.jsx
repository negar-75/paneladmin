import React from "react";
import "./previewItemForm.scss";
import ChangePhoto from "../changePhoto/changePhoto";

function PreviewItemForm({}) {
  return (
    <div className="preveiw-item-form">
      <h2 className="title">Preview</h2>
      <div className="preview-item-form-container">
        <div className="preveiw-form-element">
          <h3>Photos</h3>
          <div className="upload-section">
            <ChangePhoto
              title={"for mobile"}
              showImage={true}
            />
            <ChangePhoto
              title={"for web"}
              showImage={true}
              set
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewItemForm;
