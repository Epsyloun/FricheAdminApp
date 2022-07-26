import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainContainer from './routes/MainApp';

function App() {
    //TODO Paginacion Deudas
    //TODO poner parte de tecnologias en footer
    //TODO Quitar footer en mobile
    return (
        <BrowserRouter>
            <MainContainer/>
        </BrowserRouter>
    );
  }

  export default App;