import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import MainContainer from './routes/MainApp';
import { useTheme} from './hooks/useTheme';


function App() {
    //variable que contiene el tema traido desde el hook useTheme
    const theme = createTheme(useTheme());

    /*TODO 1-PEDIDOS
    arreglar key de tablas*/
    /*TODO 1-GRAFICOS
    cambiar el componente de tabs por dots media */
    /*TODO 1-GENERAL
    cambiar graficos a charts 2*/
    /*TODO 1-INVENTARIO
    crear componentes necesarios*/
    /*TODO 1-MODAL
    crear vista de modal venta*/
    /*TODO 1-MANTENIMIENTO
    hacer mantenimiento de para la primera entrega separando componentes y limpiando el codigo */
    /*TODO 2-MOBILE
    ver comportamiento de graficos en */
    /*TODO 2-BUSCADOR
    cambiar diseño, ya que se ve feo lo morado de atras*/
    /*TODO 2-BUSCADOR
    enviar props de filtro*/
    /*TODO 2-PAGES
    arreglar redireccionamiento al hacer refresh*/
    /*TODO 2-PERSISTENCIA
    arreglar persistencia de datos con arreglos de js*/
    /*TODO 2-404
    hacer 404 y redireccionar al inicio*/
    /*TODO 3-SKELETON
    Crear skeleton para cada seccion del dashboard*/
    /*TODO 4-DISEÑO
    cambiar diseño del home agregar circular progress bar y progress bar */
    //TODO 3/18

    return (
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <MainContainer/>
                </BrowserRouter>
            </ThemeProvider>
    );
  }

  export default App;