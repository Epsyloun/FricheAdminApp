import React, { useEffect, useState } from 'react';
import {ListInventario} from '../components/InventarioComponents/ListInventario';
import { Title } from '../components/GenericComponents/Title';
import { LoaderInventario } from '../components/GenericComponents/Skeletons';

function InventarioContainer() {
    const [loader, setLoader] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    },[loader])

    return (
        <>
            <Title
                titleText="Inventario"
            />
            {loader && <LoaderInventario/>}
            {!loader && <ListInventario/>}
        </>
         );
}

export {InventarioContainer};