import React from 'react';
import {ListInventario} from '../components/InventarioComponents/ListInventario';
import { Title } from '../components/GenericComponents/Title';

function InventarioContainer() {

    return (
        <>
            <Title
                titleText="Inventario"
            />
            <ListInventario/>
        </>
         );
}

export {InventarioContainer};