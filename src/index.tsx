import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from './Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CssBaseline>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CssBaseline>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
