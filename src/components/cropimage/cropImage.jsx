import React from 'react'
import AvatarEditor from 'react-avatar-editor'
import { Modal } from 'antd';
import  'antd/dist/antd.css';


function CropImage({imageSrc, onCrop, setEditorRef, scaleValue, onScaleChange, onTest, isModalOpen, setModal}) {
  
 
  console.log(onTest)
  React.useEffect(()=> {
    if(onTest) {
       console.log('done')
       setModal(true)
     }
  }, [onTest])
   
  return (
    <div>
    <Modal title="Basic Modal" open={isModalOpen} onOk={onCrop} onCancel={()=>setModal(false)}>
        
       <AvatarEditor image={imageSrc} border={50} scale={scaleValue} rotate={0} ref={setEditorRef} className="cropCanvas" />
         <input style={{ width: '100%' }} type="range" value={scaleValue} name="points" min="1" max="10" onChange={onScaleChange} />
         
      </Modal>
  </div>
  )

  }
export default CropImage