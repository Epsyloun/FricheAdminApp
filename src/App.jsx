import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import MainContainer from './routes/MainApp';
import { hot } from 'react-hot-loader/root';
import { useThemeHook } from './hooks/useTheme';


function App() {
    //variable que contiene el tema traido desde el hook useTheme
    const theme = createTheme(useThemeHook());

    /*TODO 1-PEDIDOS
    arreglar key de tablas*/
    /*TODO 2-404
    hacer 404 y redireccionar al inicio*/
    //TODO 18/20

    //TODO FINALIZAR migrar a webpack optimizado
    /*TODO FINALIZAR arreglar redireccionamiento al hacer refresh,SE ARREGLA EN WEBPACK*/

    return (
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <MainContainer/>
                </BrowserRouter>
            </ThemeProvider>
    );
  }

  export default hot(App);