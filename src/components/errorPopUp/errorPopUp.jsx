import React from 'react';
import './errorPopUp.scss';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Typography from '@mui/material/Typography';
import {amber } from '@mui/material/colors';
import store from '../../store';
import {clearMessage} from '../../actions/message'
import { useTheme } from '@mui/material/styles';



function ErrorPopUp(props) {
  const [openDialog,setOpenDialog] = React.useState(false)
  const {message} = props
  const theme = useTheme();
  

  React.useEffect(() =>{
    if(message){
      setOpenDialog(true)
    }
 },[message])
  return (
    <div className='errorPopUp' >
         <Dialog
        open={openDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ width : '100%', display:'flex',justifyContent:'center', 
        '& .MuiDialog-paper':{
           height:'50vh',
           width:'30vw'
        }}}
        maxWidth='sm'
        scroll='paper'
        
         >
        <DialogTitle id="alert-dialog-title" 
          sx={{backgroundColor:'crimson',height:'30%',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <CancelOutlinedIcon sx={{fontSize: 120, color:'white'}}/>
        </DialogTitle>
        <DialogContent  sx={{display:'flex', justifyContent:'center',alignItems:'center',overflow: "hidden"}}>
          <DialogContentText id="alert-dialog-description">
            <Typography variant='h4' align='center'>Oops..</Typography>
            <Typography variant='body1'>{message}</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions  sx={{display:'flex', justifyContent:'center',paddingBottom:3}}>
          <Button variant="outlined" 
          sx ={{
          '&.MuiButton-root':{
               borderRadius:50,
               border:2,
               borderColor:'green',
               color: amber[500],
               width:'20%',
               fontWeight:'bold',
          }}} onClick={() =>{ setOpenDialog(false); store.dispatch(clearMessage()) }}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ErrorPopUp