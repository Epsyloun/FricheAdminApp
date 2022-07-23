import React from 'react';
import { Typography } from '@mui/material';
import {Buscador} from '../../components/GenericComponents/Buscador';
import {ListInventario} from '../../components/InventarioComponents/ListInventario';
import { Title } from '../../components/GenericComponents/Title';
/*TODO MODIFICAR Diseño de de inventario categorias
*/
/*TODO CREAR Diseño de inventario dentro de categoria para agregarr y eliminar y modificar
*/
function InventarioContainer() {

    return (
        <div  className="content-container">
            <Title
                titleText="Inventario"
            />
            <ListInventario/>
        </div >
         );
}

export {InventarioContainer};