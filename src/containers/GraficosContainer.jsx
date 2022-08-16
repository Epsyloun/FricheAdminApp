import React, { useEffect, useState } from 'react';
import { Title } from '../components/GenericComponents/Title';
import {GraficosList} from '../components/GraficosComponents/GraficosList';
import { LoaderGraficos } from '../components/GenericComponents/Skeletons';

function GraficosContainer() {
  const [loader, setLoader] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    },[loader])
    return (
      <>
        <Title
            titleText="Estadisticas"
        />
        {loader && <LoaderGraficos/>}
        {!loader && <GraficosList/>}

      </>
     );
}

export {GraficosContainer};