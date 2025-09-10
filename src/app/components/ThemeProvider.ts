
import { BorderColor } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: '#191970',
          fontSize: '14px',
            '&:hover': {
           borderColor: '#1976d2'
          },
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          color: 'white',
          textTransform: 'none',
          backgroundColor: '#5d9cec'
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          backgroundColor: 'white',
          padding: '0px !important'
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          minHeight: '12px',
          fontSize: '10px',
            '&:hover': {
           borderColor: '#1976d2'
          },
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          color: 'black',
          '&:hover': {
            backgroundColor: '#1976d214'
          },
        },
      },
    }
  }
});
export default theme;
