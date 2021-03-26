import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core';

import Routes from './routes';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#CD0000',
    },
    secondary: {
      main: '#FFD900',
    },
  },
  typography: {
    allVariants: {
      textTransform: 'none',
      fontFamily: ({ type }) => {
        switch (type) {
          case 'title':
            return 'Gagarin';
          default:
            return 'Roboto';
        }
      },
    },
  },
});

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Routes />
      </CssBaseline>
    </ThemeProvider>
  );
};

const App = () => {
  return <Root />;
};

export default App;
