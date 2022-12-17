import React from 'react';
import AvatarEditor from 'react-avatar-editor';
import './cropPhoto.scss'
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Slider,
} from '@mui/material';
import {sliderStyle} from '../../style/customMuiStyle'


function CropPhoto({imageSrc, onCrop, EditorRef, scaleValue, onScaleChange, isDialogOpen, setIsDialogOpen}) {
  
  

  

  
  return (
    <Dialog open={isDialogOpen} onClose={onCrop}>
    <DialogContent sx={{ mx: 0, my: 0 , p:0}} >
      <AvatarEditor 
       image={imageSrc}
       width= {430}
       border={20} 
       scale={scaleValue} 
       rotate={0} 
       ref={EditorRef} 
       className="cropCanvas"
       />
    </DialogContent>
    <DialogActions  sx={{ flexDirection: 'column', mx: 0, my: 0 }}>
    <Box sx={{ width : '100%', display:'flex',justifyContent:'center'}}>
      <Box sx={{ width: '70%', mb: 1 }}>
      <Slider
      aria-label="Zoom" 
      onChange={onScaleChange}
      value={scaleValue}
      min={1}
      max={3}
      step={0.1}
      sx = {sliderStyle}
      />
      </Box>
    </Box>
    <div className="buttons">
      <button className='cancel' onClick={() => setIsDialogOpen(false)} >Cancel</button>
      <button className='save' onClick={onCrop}>Save</button>
    </div>
    </DialogActions>
  </Dialog>
)

  }
export default CropPhoto