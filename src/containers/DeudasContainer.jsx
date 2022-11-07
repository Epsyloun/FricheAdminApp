import React, { useEffect, useState } from "react";
import { Buscador } from "../components/GenericComponents/Buscador";
import { ListDeuda } from "../components/DeudasComponents/ListDeuda";
import { EditOrDeleteDeuda } from "../components/DeudasComponents/EditOrDeleteDeuda";
import { Title } from "../components/GenericComponents/Title";
import { NewCobro } from "../components/DeudasComponents/NewCobro";

function DeudasContainer() {
  //Manejo de variables de Edit or Delete
  const [deudaId, setDeudaId] = useState(0);

  //Manejo de modals
  const [open, setOpen] = useState(false);
  const [openEoD, setOpenEoD] = useState(false);
  const [searchCobro, setSearchCobro] = useState("");

  return (
    <>
      <Title titleText="Cobros" />
      <Buscador
        setSearch={setSearchCobro}
        open={open}
        setOpen={setOpen}
        setOpenEoD={setOpenEoD}
      />
      <ListDeuda
        setDeudaId={setDeudaId}

        searchValue={searchCobro}
        open={open}
        setOpen={setOpen}
        openEoD={openEoD}
        setOpenEoD={setOpenEoD}
      />
      <NewCobro open={open} setOpen={setOpen} setOpenEoD={setOpenEoD} />
      <EditOrDeleteDeuda
        deudaId={deudaId}
        openEoD={openEoD}
        setOpen={setOpen}
        setOpenEoD={setOpenEoD}
      />
    </>
  );
}

export { DeudasContainer };
