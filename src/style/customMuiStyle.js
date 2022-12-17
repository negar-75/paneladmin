import { flexbox } from "@mui/system"

const textFieldStyle = {
    "& label.Mui-focused": {
      color: '#3A6B35' 
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: '#3A6B35' 
    }
  }

const toggleStyle = {
  lable:{
    "& .MuiFormControlLabel-label":{
      color:'black', 
      fontSize:12,
      m: 0
    }
  }
 ,
  swich:{
    "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
      backgroundColor: "light green"
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: "#3A6B35"
    }
  }
}

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
    textFieldStyle,
    toggleStyle,
    sliderStyle 
 }