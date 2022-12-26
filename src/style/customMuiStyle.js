import { createTheme } from "@mui/material"


export const theme = createTheme({
  typography:{
    fontFamily:'Nunito',
 },

 palette:{
  primary:{
    main: '#3A6B35'
  },
  secondary:{
    main:'#E3B448',
    light:'#f2e3b6'
  },
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
},
pagination:{
  "&.MuiPagination-root": {
    display: "flex",
    justifyContent: "flex-end",
    button: {
      color: "primary.main",
    },
    "& .Mui-selected": {
      background: "secondary.main",
      color: "white",
    },
  },
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