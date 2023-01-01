import React from "react";
import CropPhoto from "../cropPhoto/cropPhoto";
import "./changePhoto.scss";

function ChangePhoto(props) {
  const { title, showImage, setUrl } = props;

  const [userProfilePic, setUserProfilePic] = React.useState("");
  const [scaleValue, setScaleValue] = React.useState(1);
  const [selectedImage, setSelectedImage] = React.useState("");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const editor = React.useRef(null);

  const onCrop = () => {
    try {
      if (editor) {
        const canvas = editor.current.getImage();
        const url = canvas.toDataURL();
        setUrl && setUrl(url); // in staff/new we do not have setUrl
        setUserProfilePic(url);
        setIsDialogOpen(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onScaleChange = (scaleChangeEvent) => {
    const scaleValue = parseFloat(scaleChangeEvent?.target?.value); // for slider value
    setScaleValue(scaleValue);
  };

  const inputHandler = (fileChangeEvent) => {
    const file = fileChangeEvent.target.files[0];
    setIsDialogOpen(true);
    const { type } = file;
    if (
      type.endsWith("jpeg") ||
      type.endsWith("png") ||
      type.endsWith("jpg") ||
      type.endsWith("gif")
    ) {
      setSelectedImage(fileChangeEvent.target.files[0]);
    }
    fileChangeEvent.target.value = null; // clear input
  };

  return (
    <div className="change-photo">
      <CropPhoto
        imageSrc={selectedImage}
        EditorRef={editor}
        onCrop={onCrop}
        scaleValue={scaleValue}
        onScaleChange={onScaleChange}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />

      {showImage && (
        <div className="profile-image">
          <img
            src={
              userProfilePic
                ? userProfilePic
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt="Profile"
            className="formImage"
          />
        </div>
      )}
      <div className="upload">
        <label htmlFor="upload">{title}</label>
        <input
          type="file"
          name="profile-pic-button"
          accept="image/png, image/jpeg"
          onChange={inputHandler}
          id="upload"
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}

export default ChangePhoto;
