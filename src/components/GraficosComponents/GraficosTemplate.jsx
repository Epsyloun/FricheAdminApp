import React from 'react';
import {Chart,registerables} from 'chart.js'
import { useTheme} from '../../hooks/useTheme';

function GraficosTemplate({type, data, name,height="auto"}) {

    Chart.register(...registerables);

    React.useEffect(()=>{
      const ctx = document.getElementById(name)
        const myChart = new Chart(ctx, config)
    },[])



      const config = {
        type: type,
        data: data,
        options: {
          maintainAspectRatio: false,
      }
      };
    return (
        <canvas id={name} width="auto" height={height}/>
     );
}

export {GraficosTemplate};