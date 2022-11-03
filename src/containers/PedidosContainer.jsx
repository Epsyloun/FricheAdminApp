import React, { useEffect, useState } from "react";
import { Buscador } from "../components/GenericComponents/Buscador";
import { TableComponent } from "../components/GenericComponents/Table";
import { Title } from "../components/GenericComponents/Title";
import { PedidosArray } from "../components/GenericComponents/infoExamples";
import { LoaderPedidos } from "../components/GenericComponents/Skeletons";
import { NewPedido } from "../components/PedidosComponents/NewPedido";

function PedidosContainer() {
  function createData(nombre, fecha, total) {
    return { nombre, fecha, total };
  }
  const columns = [
    { id: "nombre", label: "Nombre" },
    { id: "fecha", label: "Fecha" },
    { id: "total", label: "Total" },
  ];

  const newRow = PedidosArray();
  const sendRow = [];
  newRow.map((row) => {
    sendRow.push(createData(row.nombre, row.fecha, row.monto));
  });

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [loader]);

  const [open, setOpen] = useState(false);

  return (
    <>
      <Title titleText="Pedidos" />
      {loader && <LoaderPedidos />}
      {!loader && (
        <>
          <Buscador open={open} setOpen={setOpen}/>
          <TableComponent columns={columns} rows={sendRow} />
          <NewPedido open={open} setOpen={setOpen} />
        </>
      )}
    </>
  );
}

export { PedidosContainer };
