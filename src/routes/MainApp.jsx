import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import {InicioPages} from '../pages/InicioPages';
import {DeudasPages} from '../pages/DeudasPages';
import {PedidosPages} from '../pages/PedidosPages';
import {FinanzasPages} from '../pages/FinanzasPages';
import {GraficosPages} from '../pages/GraficosPages';
import {InventarioPages} from '../pages/InventarioPages';
import {AjustesPages} from '../pages/AjustesPages';
import {MobilePages} from '../pages/MobilePages';
import {AppBarContainer} from '../containers/AppBarContainer/AppBarContainer';
import {FooterContainer} from '../containers/FooterContainer/FooterContainer';
import '../containers/ContainersStyles.css';



function MainContainer() {

    return (
        <BrowserRouter>
            <div className='big-container'>
                <div id="main-container">
                    <AppBarContainer/>
                        <Routes>
                            <Route  path="/" element={<InicioPages/>}/>
                            <Route  path="/deudas" element={<DeudasPages/>}/>
                            <Route exact path="/pedidos" element={<PedidosPages/>}/>
                            <Route exact path="/finanzas" element={<FinanzasPages/>}/>
                            <Route exact path="/graficos" element={<GraficosPages/>}/>
                            <Route exact path="/inventario" element={<InventarioPages/>}/>
                            <Route exact path="/ajustes" element={<AjustesPages/>}/>
                            <Route exact path="/mobilePages" element={<MobilePages/>}/>
                        </Routes>
                </div>
                <FooterContainer/>
            </div>
        </BrowserRouter>
     );
}

export default MainContainer;