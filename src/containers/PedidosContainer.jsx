import React from 'react';
import {Buscador} from '../components/GenericComponents/Buscador';
import {TableComponent} from '../components/GenericComponents/Table';
import { Title } from '../components/GenericComponents/Title';
import { PedidosArray } from '../components/PedidosComponent/PedidosArray';
function PedidosContainer() {

    function createData(nombre, fecha, total ) {
        return { nombre, fecha, total };
        }
    const columns = [
        { id: 'nombre', label: 'Nombre'},
        { id: 'fecha', label: 'Fecha'},
        { id: 'total', label: 'Total'},
      ];

    const newRow = PedidosArray()
    const sendRow = []
    newRow.map((row)=>{
        sendRow.push(createData(row.nombre, row.fecha, row.monto))
    })


    return (
        <>
            <Title
                titleText="Pedidos"
            />
            <Buscador/>
            <TableComponent
                columns={columns}
                rows={sendRow}
            />
        </>
         );
}

export {PedidosContainer};