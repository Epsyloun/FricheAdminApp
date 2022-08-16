import React, { useEffect, useState } from 'react'
import {Buscador} from '../components/GenericComponents/Buscador';
import {ListDeuda} from '../components/DeudasComponents/ListDeuda';
import {Title} from '../components/GenericComponents/Title';
import { LoaderDeudas } from '../components/GenericComponents/Skeletons';

function DeudasContainer() {
    const [loader, setLoader] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    },[loader])
    return (
        <>
            <Title
            titleText="Cobros"
            />
            {loader&&<LoaderDeudas/>}
            {!loader&&
            <>
                <Buscador/>
                <ListDeuda/>
            </>
            }
        </>
     );
}

export {DeudasContainer};