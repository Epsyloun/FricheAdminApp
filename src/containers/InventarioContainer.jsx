import React from 'react';
import {ListInventario} from '../components/InventarioComponents/ListInventario';
import { Title } from '../components/GenericComponents/Title';
/*TODO MODIFICAR Diseño de de inventario categorias
*/
/*TODO CREAR Diseño de inventario dentro de categoria para agregarr y eliminar y modificar
*/
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