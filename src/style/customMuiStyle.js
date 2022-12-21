import { createTheme } from "@mui/material"

export const theme = createTheme({
  typography:{
    fontFamily:'Nunito',
 },

 textFieldStyle :{
  "& label.Mui-focused": {
    color: 'green' 
    },
  "& .MuiInput-underline:after": {
    borderBottomColor: '#3A6B35' 
  }
},
toggleStyle : {
  lable:{
    "& .MuiFormControlLabel-label":{
      color:'black', 
      fontSize:12,
      m: 0
    }
  }
 ,
  switch:{
    "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
      backgroundColor: "light green"
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: "#3A6B35"
    }
  }
}
 
})




const sliderStyle = {

  "& .MuiSlider-track":{
    color: "#3A6B35",
    
  },
  "& .MuiSlider-thumb":{
    color: "#3A6B35"
  },
  "& .MuiSlider-rail":{
    color:'green'

  }
}



 export {
    
    sliderStyle 
 }