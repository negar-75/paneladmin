import { WidthFull } from "@mui/icons-material"
import { createTheme } from "@mui/material"


export const theme = createTheme({
  typography:{
    fontFamily:'Nunito',
 },

 components:{
  
  MuiDataGrid:{
    styleOverrides:{
      row:{
         "&.Mui-selected":{
          backgroundColor:'#f2f2b6',
          '&:hover' : {
            backgroundColor:'#f2f2b6'
          },
        },
        '&:hover' : {
          backgroundColor:'#f2f2b6'
        },
        '&:active':{
          backgroundColor:'#f2f2b6'
        }
      },
      cell:{
        border:'none',
        '&:focus': {
         border:'none',
         boxShadow: "none",
         outline:' none !important'
        }
      },
      columnHeaderTitle:{
        fontWeight: 600,
        // backgroundColor:'purple',
       
      },
      columnHeader:{
        display:'flex',
      },
      columnSeparator:{
        display:'none'
      }
    }
  }
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