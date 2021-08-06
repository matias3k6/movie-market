import { Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, LinearProgress } from '@material-ui/core';
import AppRoutes from 'appRoutes';
import MoviesProvider from 'contexts/MoviesContext/index';
import { BoxWrapper } from 'components/wrapper';
import { theme } from './theme';

const App = (): JSX.Element => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Suspense fallback={<LinearProgress />}>
          <MoviesProvider>
            <BoxWrapper>
              <AppRoutes />
            </BoxWrapper>
          </MoviesProvider>
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;
