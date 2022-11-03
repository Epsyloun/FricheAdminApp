import React, {useState, useEffect} from "react";
import { Grid } from "@mui/material";
import { CardDeuda } from "./CardDeuda";
import {getCobros} from '../../firebase/api'
import { LoaderDeudas } from '../GenericComponents/Skeletons';
import { DeudasArray } from "../GenericComponents/infoExamples";

function ListDeuda({searchValue, open ,setOpen,openEoD ,setOpenEoD}) {

  const [loader, setLoader] = useState(true);

  const [cobrosList, setCobrosList] = useState([]);

  //lista con ejemplos termporales para no gastar firebase
  const cobrosListBase = DeudasArray();
  const [cobrosListLocal, setCobrosListLocal] = useState(DeudasArray());

  const getDeudas = async () => {
    const querySnapshot = await getCobros();
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setCobrosList(docs);
      setLoader(false);
  }

  //Traer la informacion cada ves que se ingresa un valor nuevo
  // useEffect(() => {
  //   getDeudas();
  // },[cobrosList])

  //Buscador de informacion

  useEffect(() => {
    if(searchValue >=1){
      setCobrosListLocal(DeudasArray());
    }else{
      setCobrosListLocal(cobrosListBase.filter(({nombre}) =>{

        const deudasName = nombre.toLowerCase();
        const searchName = searchValue.toLowerCase();
        return deudasName.includes(searchName);
      }))
    }
  },[searchValue]);




  return (
    <>
    {/* {loader&&<LoaderDeudas/>}
    {!loader&& */}
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      {cobrosListLocal.map((deudas) => (
        <Grid item xs={12} md={4} key={deudas.id}>
          <CardDeuda
            openEoD={openEoD}
            setOpenEoD={setOpenEoD}
            open={open}
            setOpen={setOpen}
            initial={deudas.nombre.charAt(0).toUpperCase()}
            title={deudas.nombre + " " + deudas.apellido}
            info={deudas.monto}
            subtitle={deudas.fecha}
          />
        </Grid>
      ))}
    </Grid>
    {/* } */}
    </>
  );
}

export { ListDeuda };
