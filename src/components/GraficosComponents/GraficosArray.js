import { useThemeHook} from '../../hooks/useTheme';

function CobrosGraficosArray() {
    const colors = useThemeHook();
    const ArrayCobrosGraficos = [
        {
            label: 'Grafico 1',
            type:'bar',
            allData:{
                labels: [
                'Lunes',
                'Martes',
                'Miercoles',
                'Jueves',
                'Viernes',
                'Sabado',
                'Domingo'
                ],
                datasets: [{
                label: 'Suma de ventas por dia',
                backgroundColor: colors.palette.secondary.main,
                borderColor: 'rgb(255, 99, 132)',
                data: [5, 10, 5, 2, 20, 30, 45],
                }]
            }

          },
          {
            label: 'Grafico numero 2',
            type:'bar',
            allData:{
                labels: [
                'Lunes',
                'Martes',
                'Miercoles',
                'Jueves',
                'Viernes',
                'Sabado',
                'Domingo'
                ],
                datasets: [{
                label: 'Suma de ventas por dia',
                backgroundColor: colors.palette.secondary.main,
                borderColor: 'rgb(255, 99, 132)',
                data: [5, 10, 5, 2, 20, 30, 5],
                }]
            }
          },
    ]
    return ( ArrayCobrosGraficos );
}
function PedidosGraficosArray() {
    const colors = useThemeHook();
    const ArrayPedidosGraficos = [
        {
            label: 'Grafico 1',
            type:'line',
            allData:{
                labels: [
                'Lunes',
                'Martes',
                'Miercoles',
                'Jueves',
                'Viernes',
                'Sabado',
                'Domingo'
                ],
                datasets: [{
                label: 'Suma de ventas por dia',
                backgroundColor: colors.palette.secondary.main,
                borderColor: 'rgb(255, 99, 132)',
                data: [5, 10, 5, 2, 20, 30, 45],
                }]
            }

          },
          {
            label: 'Grafico numero 2',
            type:'line',
            allData:{
                labels: [
                'Lunes',
                'Martes',
                'Miercoles',
                'Jueves',
                'Viernes',
                'Sabado',
                'Domingo'
                ],
                datasets: [{
                label: 'Suma de ventas por dia',
                backgroundColor: colors.palette.secondary.main,
                borderColor: 'rgb(255, 99, 132)',
                data: [5, 10, 5, 2, 20, 30, 5],
                }]
            }
          },
    ]
    return ( ArrayPedidosGraficos );
}
function InventarioGraficosArray() {
    const colors = useThemeHook();
    const ArrayInventarioGraficos = [
        {
            label: 'Grafico 1',
            type:'line',
            allData:{
                labels: [
                'Lunes',
                'Martes',
                'Miercoles',
                'Jueves',
                'Viernes',
                'Sabado',
                'Domingo'
                ],
                datasets: [{
                label: 'Suma de ventas por dia',
                backgroundColor: colors.palette.secondary.main,
                borderColor: 'rgb(255, 99, 132)',
                data: [5, 10, 5, 2, 20, 30, 45],
                }]
            }

          },
          {
            label: 'Grafico numero 2',
            type:'line',
            allData:{
                labels: [
                'Lunes',
                'Martes',
                'Miercoles',
                'Jueves',
                'Viernes',
                'Sabado',
                'Domingo'
                ],
                datasets: [{
                label: 'Suma de ventas por dia',
                backgroundColor: colors.palette.secondary.main,
                borderColor: 'rgb(255, 99, 132)',
                data: [5, 10, 5, 2, 20, 30, 5],
                }]
            }
          },
    ]
    return ( ArrayInventarioGraficos );
}
function FinanzasGraficosArray() {
    const colors = useThemeHook();
    const ArrayFinanzasGraficos = [
        {
            label: 'Grafico 1',
            type:'line',
            allData:{
                labels: [
                'Lunes',
                'Martes',
                'Miercoles',
                'Jueves',
                'Viernes',
                'Sabado',
                'Domingo'
                ],
                datasets: [{
                label: 'Suma de ventas por dia',
                backgroundColor: colors.palette.secondary.main,
                borderColor: 'rgb(255, 99, 132)',
                data: [5, 10, 5, 2, 20, 30, 45],
                }]
            }

          },
          {
            label: 'Grafico numero 2',
            type:'line',
            allData:{
                labels: [
                'Lunes',
                'Martes',
                'Miercoles',
                'Jueves',
                'Viernes',
                'Sabado',
                'Domingo'
                ],
                datasets: [{
                label: 'Suma de ventas por dia',
                backgroundColor: colors.palette.secondary.main,
                borderColor: 'rgb(255, 99, 132)',
                data: [5, 10, 5, 2, 20, 30, 5],
                }]
            }
          },
    ]
    return ( ArrayFinanzasGraficos );
}

export {CobrosGraficosArray, PedidosGraficosArray, InventarioGraficosArray, FinanzasGraficosArray};