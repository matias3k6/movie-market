import { createTheme } from '@material-ui/core';
import * as Colors from '@material-ui/core/colors';

export const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: Colors.cyan[500],
    },
    secondary: {
      main: Colors.pink[500],
    },
    background: {
      paper: Colors.grey[800],
      default: Colors.common.black,
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
