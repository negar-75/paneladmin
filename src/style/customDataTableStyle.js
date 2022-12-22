import  { createTheme } from 'react-data-table-component';

export const theme  = createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: 'transparent',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');


  export const customStyles = {
    header: {
      style: {
        minHeight: "56px",
        color: " #3A6B35 ",
        fontSize: '23px',
		fontWeight: 400,
        fontFamily:'Nunito'
       }
    },
    headRow: {
      style: {
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        color: " #3A6B35 ",
        fontSize: '17px',
        fontWeight: 600,
        fontFamily:'Nunito'
      },
    },
    headCells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          color: "#3A6B35 ",
        },
      },
    },
    cells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: "#dcd9de",
        },
      },
    },

    rows: {
		style: {
			fontSize: '13px',
			fontWeight: 400,
			color: theme.text.primary,
			backgroundColor: theme.background.default,
			minHeight: '50px',
			'&:not(:last-of-type)': {
				borderBottomStyle: 'solid',
				borderBottomWidth: '1px',
				borderBottomColor: theme.divider.default,
			},
		},
    }
  };

  