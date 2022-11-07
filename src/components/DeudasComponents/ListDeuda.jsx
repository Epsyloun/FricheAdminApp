import React, {useState, useEffect} from "react";
import { Grid } from "@mui/material";
import { CardDeuda } from "./CardDeuda";
import {getCobros} from '../../firebase/api'
import { LoaderDeudas } from '../GenericComponents/Skeletons';
//import { DeudasArray } from "../GenericComponents/infoExamples";

function ListDeuda({setDeudaId, searchValue, open ,setOpen,openEoD ,setOpenEoD}) {

  const [loader, setLoader] = useState(true);

  const [cobrosList, setCobrosList] = useState([]);
  const [cobrosListSearch, setCobrosListSearch] = useState([]);
  const [getInfo, setGetInfo] = useState(false);

  //lista con ejemplos termporales para no gastar firebase
  //const cobrosListBase = DeudasArray();

  const getDeudas = () => {
    console.log('repito')
    const querySnapshot =  getCobros((snapshot)=>{
      const data = snapshot.docs.map((element) =>{
        const dataCard = element._document.data.value.mapValue.fields;
        return Object.keys(dataCard).reduce((prev, key)=>{
          return {
            ...prev,
            [key]:dataCard[key].stringValue
          }
        }, {id:element.id})
      })

      setCobrosList(data);
      setLoader(false);
      setGetInfo(true);
    });
      return querySnapshot;
  }

  //Traer la informacion cada ves que se ingresa un valor nuevo
  useEffect(() => {
    const unSuscribe = getDeudas();
    return ()=>{unSuscribe()}
  },[])//Si se ingresa cobrosList, actualiza cunado se agrega algo nuevo pero hace peticiones infinitas

  //Buscador de informacion
  useEffect(() => {
    if(!getInfo){

    }else{
      if(searchValue ===""){
        setCobrosListSearch(cobrosList);
      }else{
        setCobrosListSearch(cobrosList.filter(({nombre}) =>{
          const deudasName = nombre.toLowerCase();
          const searchName = searchValue.toLowerCase();
          return deudasName.includes(searchName);
        }))
      }
    }
  },[searchValue, getInfo, cobrosList]);

  return (
    <>
    {loader&&<LoaderDeudas/>}
    {!loader&&
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      {cobrosListSearch.map((deudas) => (
        <Grid item xs={12} md={4} key={deudas.id}>
          <CardDeuda
            setDeudaId={setDeudaId}
            deudaId={deudas.id}

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
    }
    </>
  );
}

export { ListDeuda };
