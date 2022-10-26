import React from 'react'
import CropImage from '../cropimage/cropImage';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import "./changeProfile.scss"



function ChangeProfile() {

  const [userProfilePic,setUserProfilePic] = React.useState("");
  const [scaleValue,setScaleValue] = React.useState(1);
  const [selectedImage,setSelectedImage] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const editor = React.useRef(null);

  const onCrop = () =>{
    if (editor) {
      console.log(editor)
      const canvas = editor.current.getImage()
      console.log(canvas)
      const url =canvas.toDataURL();
      console.log(url)
      setUserProfilePic(url)
      setIsModalOpen(false)
      
    }
   
  }

 const onScaleChange = (scaleChangeEvent) => {
    const scaleValue =  parseFloat(scaleChangeEvent.target.value);
    setScaleValue(scaleValue)
  };


  const profilePicChange = (fileChangeEvent) => {
    const file = fileChangeEvent.target.files[0];
    const { type } = file;
    
    if ((type.endsWith('jpeg') || type.endsWith('png') || type.endsWith('jpg') || type.endsWith('gif'))) {
     setSelectedImage(URL.createObjectURL(file))
     console.log('selectedImage')
    } 
  };
 
  let str,
  element = document.getElementById('upload');
  if (element != null) {
      str = element.value;
  }
  else {
      str = null;
  }
  
  return (
    <div className='changeProfile'>
     
    <CropImage 
          imageSrc={selectedImage}
          setEditorRef={editor}
          onCrop={onCrop}
          scaleValue={scaleValue}
          onScaleChange={onScaleChange}
          onTest={str}
          isModalOpen = {isModalOpen}
          setModal = {setIsModalOpen}
        />
        
   <img src={userProfilePic ? userProfilePic  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="Profile" className='formImage' />
        <div className="upload">
          <label htmlFor="upload"> 
            Change Profile
          </label> 
           <input type="file" name="profilePicBtn" accept="image/png, image/jpeg" onChange={profilePicChange} id="upload"
           style={{display:"none"}} />
        </div>
     

        
    </div>
  )
}

export default ChangeProfile