import React, { useEffect } from 'react';
import {MobileBar} from '../../components/AppBarComponents/MobileBar';
import {useWidth} from '../../hooks/useWidth';
import { useNavigate } from "react-router-dom";
import { AppBarNav } from '../../components/AppBarComponents/AppBar';

function AppBarContainer() {

    //Menu handler
    const [pageIndex, setPageIndex] = React.useState(0);
    let navigate = useNavigate();
    useEffect(()=>{
            if(pageIndex === 0){
                navigate("/")
            }else if(pageIndex === 1){
                navigate("/deudas")
            }else if(pageIndex === 2){
                navigate("/pedidos")
            }else if(pageIndex === 3){
                navigate("/inventario")
            }else if(pageIndex === 4){
                navigate("/finanzas")
            }else if(pageIndex === 5){
                navigate("/graficos")
            }else if(pageIndex === 6){
                navigate("/ajustes")
            }else if(pageIndex === 7){
                navigate("/mobilePages")
            }

    },[pageIndex])

    if(useWidth() >=1300)
    {
        return(
            <AppBarNav
                pageIndex={pageIndex}
                setPageIndex={setPageIndex}
            />
        );
    }else {
        return (
            <MobileBar
                pageIndex={pageIndex}
                setPageIndex={setPageIndex}
            />
        );
  }
}

export {AppBarContainer};