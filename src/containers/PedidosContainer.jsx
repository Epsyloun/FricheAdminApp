import React from 'react';
import {Buscador} from '../components/GenericComponents/Buscador';
import {TableComponent} from '../components/GenericComponents/Table';
import { Title } from '../components/GenericComponents/Title';
function PedidosContainer() {

    function createData(nombre, fecha, total ) {
        return { nombre, fecha, total };
        }
    const columns = [
        { id: 'nombre', label: 'Nombre'},
        { id: 'fecha', label: 'Fecha'},
        { id: 'total', label: 'Total'},
      ];

        const rows = [
          createData('Nombre1', '15/07/22', '$22.50'),
          createData('Nombre2', '15/07/22', '$22.50'),
          createData('Nombre3', '15/07/22', '$22.50'),
    ];

    return (
        <>
            <Title
                titleText="Pedidos"
            />
            <Buscador/>
            <TableComponent
                columns={columns}
                rows={rows}
            />
        </>
         );
}

export {PedidosContainer};