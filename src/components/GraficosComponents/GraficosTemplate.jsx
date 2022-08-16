import React from 'react';
import {Chart,registerables} from 'chart.js'
import { useThemeHook } from '../../hooks/useTheme';

function GraficosTemplate({type, data, name,height="auto"}) {

  const colors = useThemeHook();

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
          responsive: true,
            plugins:{
              legend: {
              labels: {
                color: colors.palette.text.accent,
              },
              position: 'top'
            }
          }
        },
      };
    return (
        <canvas id={name} width="auto" height={height}/>
     );
}

export {GraficosTemplate};