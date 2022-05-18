/* eslint-disable react/jsx-filename-extension */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable import/order */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: { primary: { main: "#808080" }, secondary: { main: "#0000FF" } },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: "yellow",
          "&.Mui-selected": {
            backgroundColor: "green",
            "&.Mui-focusVisible": { background: "orange" }
          }
        }
      }
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
