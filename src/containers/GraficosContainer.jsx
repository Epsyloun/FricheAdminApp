import React from 'react';
import { Title } from '../components/GenericComponents/Title';
import {GraficosList} from '../components/GraficosComponents/GraficosList';

function GraficosContainer() {
    return (
      <>
        <Title
            titleText="Estadisticas"
        />
        <GraficosList/>
      </>
     );
}

export {GraficosContainer};