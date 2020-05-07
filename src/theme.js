import { createMuiTheme } from '@material-ui/core/styles';
import { green, grey, red } from '@material-ui/core/colors';

const rawTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#06926A',
    },
    secondary: {
      main: '#DE415E',
    },
    warning: {
      main: '#ffc071',
    },
    error: {
      main: red[500],
    },
    success: {
      main: green[500],
    },
  },
});


const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      // //default: rawTheme.palette.common.white,
      default: '#fff',
      placeholder: grey[200],
    },
  },
};

export default theme;
