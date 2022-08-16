import React, { useEffect, useState } from 'react';
import {Ajustes} from '../components/AjustesComponents/Ajustes';
import {Title} from '../components/GenericComponents/Title';
import { LoaderAjustes } from '../components/GenericComponents/Skeletons';

function AjustesContainer() {
    const [loader, setLoader] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    },[loader])

    const oldNombre = 'Rodrigo';
    const oldApellido = 'Diaz';
    const oldCorreo = 'rodrigo.diaz8b@gmail.com';
    return (
        <>
        <Title
            titleText="Configuración"
        />
        {loader&&<LoaderAjustes/>}
        {!loader&&<Ajustes
            oldNombre={oldNombre}
            oldApellido={oldApellido}
            oldCorreo={oldCorreo}
        />
        }
        </>
     );
}

export {AjustesContainer};