import { WidthFull } from "@mui/icons-material";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Nunito",
  },
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: 12,
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: {
          height: 350,
          width: {
            xs: 300,
            sm: 300,
            md: 400,
            lg: 500,
            xl: 500,
          },
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        track: {
          backgroundColor: "light green",
        },
      },
    },

    MuiDataGrid: {
      styleOverrides: {
        row: {
          "&.Mui-selected": {
            backgroundColor: "#fafadc",
            "&:hover": {
              backgroundColor: "#fafadc",
            },
          },
          "&:hover": {
            backgroundColor: "#fafadc",
          },
          "&:active": {
            backgroundColor: "#fafadc",
          },

          display: "flex",
          gap: 10,
        },
        cell: {
          border: "none",

          "&:focus": {
            border: "none",
            boxShadow: "none",
            outline: " none !important",
          },
        },
        columnHeaderTitle: {
          fontWeight: 600,
        },
        columnHeader: {
          display: "flex",
          "&:focus": {
            border: "none",
            boxShadow: "none",
            outline: " none !important",
          },
        },
        columnSeparator: {
          display: "none",
        },
      },
    },
  },

  palette: {
    primary: {
      main: "#3A6B35",
    },
    secondary: {
      main: "#E3B448",
      light: "#f2e3b6",
    },
  },

  textFieldStyle: {
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#3A6B35",
    },
  },
  toggleStyle: {
    lable: {
      "& .MuiFormControlLabel-label": {
        color: "black",
        fontSize: 12,
        m: 0,
      },
    },
    // switch:{
    //   "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
    //     backgroundColor: "light green"
    //   },
    //   "& .MuiSwitch-switchBase.Mui-checked": {
    //     color: "#3A6B35"
    //   }
    // }
  },
  pagination: {
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
  },
});

export const sliderStyle = {
  "& .MuiSlider-track": {
    color: "#3A6B35",
  },
  "& .MuiSlider-thumb": {
    color: "#3A6B35",
  },
  "& .MuiSlider-rail": {
    color: "green",
  },
};
