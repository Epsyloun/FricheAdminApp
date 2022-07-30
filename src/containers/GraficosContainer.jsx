import React from 'react';
import {Chart,registerables} from 'chart.js'
import { useEffect} from 'react';

function GraficosContainer() {


    Chart.register(...registerables);

    useEffect(()=>{
        const ctx = document.getElementById('myChart')
        const myChart = new Chart(ctx, config)
    },[])

    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
      ];
    const data = {
        labels: labels,
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        }]
      };
      const config = {
        type: 'line',
        data: data,
        options: {}
      };
    return (
        <div>
            <canvas id="myChart" width="auto" height="auto"></canvas>
        </div>
     );
}

export {GraficosContainer};