import React from 'react'
import '../index.css';

import {Routes, Route, useNavigate} from 'react-router-dom'

import {InicioPages} from '../pages/InicioPages';
import {DeudasPages} from '../pages/DeudasPages';
import {PedidosPages} from '../pages/PedidosPages';
import {FinanzasPages} from '../pages/FinanzasPages';
import {GraficosPages} from '../pages/GraficosPages';
import {InventarioPages} from '../pages/InventarioPages';
import {AjustesPages} from '../pages/AjustesPages';
import {MobilePages} from '../pages/MobilePages';
import {AppBarContainer} from '../containers/AppBarContainer';
import {FooterContainer} from '../containers/FooterContainer';


function MainContainer() {
     //Menu handler
     const [pageIndex, setPageIndex] = React.useState(0);
     let navigate = useNavigate();
     React.useEffect(()=>{
        window.scrollTo({top:0,behavior:"smooth"})
             if(pageIndex === 0){
                 navigate("/FricheAdminApp/");
             }else if(pageIndex === 1){
                 navigate("/FricheAdminApp/deudas");
             }else if(pageIndex === 2){
                 navigate("/FricheAdminApp/pedidos");
             }else if(pageIndex === 3){
                 navigate("/FricheAdminApp/inventario");
             }else if(pageIndex === 4){
                 navigate("/FricheAdminApp/finanzas");
             }else if(pageIndex === 5){
                 navigate("/FricheAdminApp/graficos");
             }else if(pageIndex === 6){
                 navigate("/FricheAdminApp/ajustes");
             }else if(pageIndex === 7){
                 navigate("/FricheAdminApp/mobilePages");
             }
             //TODO hacer 404 y redireccionar al inicio

     },[pageIndex]);
    return (
        <>
            <div className='big-container'>
                <div id="main-container">
                    <AppBarContainer pageIndex={pageIndex} setPageIndex={setPageIndex}/>
                        <Routes>
                            <Route  path="/FricheAdminApp/" element={<InicioPages/>}/>
                            <Route  path="/FricheAdminApp/deudas" element={<DeudasPages/>}/>
                            <Route exact path="/FricheAdminApp/pedidos" element={<PedidosPages/>}/>
                            <Route exact path="/FricheAdminApp/finanzas" element={<FinanzasPages/>}/>
                            <Route exact path="/FricheAdminApp/graficos" element={<GraficosPages/>}/>
                            <Route exact path="/FricheAdminApp/inventario" element={<InventarioPages/>}/>
                            <Route exact path="/FricheAdminApp/ajustes" element={<AjustesPages/>}/>
                            <Route exact path="/FricheAdminApp/mobilePages" element={<MobilePages pageIndex={pageIndex} setPageIndex={setPageIndex}/>}/>
                        </Routes>
                </div>
                <FooterContainer/>
            </div>
        </>
     );
}

export default MainContainer;