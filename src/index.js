import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from 'views/MainLayout';
import Home from 'views/MainLayout/Home';
import Menu from 'views/MainLayout/Menu';
import Reservations from 'views/MainLayout/Reservations';
import About from 'views/MainLayout/About';
import Login from 'views/MainLayout/Login';

// Providery zmiennych do motywów MUI material i joy, oraz ich poszerzenie by mogły działać razem
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';

import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy";

const router = createBrowserRouter([
  { 
    path : "/",
    element : <MainLayout/>,
    children : [
      {
        path : "home",
        element : <Home/>,
      },
      {
        path : "about",
        element : <About/>,
      },
      {
        path : "login",
        element : <Login/>,
      },
      {
        path : "menu",
        element : <Menu/>
      },
      {
        path : "reservations",
        element : <Reservations/>
      }
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Opcja sprawiająca że motywy się poszerzają, źródło documentacja MUI */}
    <MaterialCssVarsProvider theme={{[MATERIAL_THEME_ID]: materialExtendTheme()}}>
      <JoyCssVarsProvider>    
        <RouterProvider router={router} />
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
