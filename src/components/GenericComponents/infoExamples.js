import { useThemeHook} from '../../hooks/useTheme';
//Info de graficos en estadisticas

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
function SaladosArray() {
    const ArraySalados = [
        {
            id:0,
            nombre:'Mani Japones',
            img:"https://dojiw2m9tvv09.cloudfront.net/4210/product/mani-japone-spa-ginaweb1913.jpg",
            precio:'0.25',
            cantidad:'30'
        },
        {
            id:1,
            nombre:'Platanitos',
            img:"https://dojiw2m9tvv09.cloudfront.net/4210/product/mani-japone-spa-ginaweb1913.jpg",
            precio:'0.25',
            cantidad:'30'
        },
        {
            id:2,
            nombre:'Mani Mixto',
            img:"https://dojiw2m9tvv09.cloudfront.net/4210/product/mani-japone-spa-ginaweb1913.jpg",
            precio:'0.25',
            cantidad:'30'
        },
        {
            id:3,
            nombre:'Pepitoria',
            img:"https://dojiw2m9tvv09.cloudfront.net/4210/product/mani-japone-spa-ginaweb1913.jpg",
            precio:'0.25',
            cantidad:'30'
        }
    ]
    return ( ArraySalados );
}
function DulcesArray() {
    const ArrayDulces = [
        {
            id:0,
            nombre:'Mani Japones',
            img:"https://dojiw2m9tvv09.cloudfront.net/4210/product/mani-japone-spa-ginaweb1913.jpg",
            precio:'0.25',
            cantidad:'30'
        },
        {
            id:1,
            nombre:'Platanitos',
            img:"https://dojiw2m9tvv09.cloudfront.net/4210/product/mani-japone-spa-ginaweb1913.jpg",
            precio:'0.25',
            cantidad:'30'
        },
        {
            id:2,
            nombre:'Mani Mixto',
            img:"https://dojiw2m9tvv09.cloudfront.net/4210/product/mani-japone-spa-ginaweb1913.jpg",
            precio:'0.25',
            cantidad:'30'
        },
        {
            id:3,
            nombre:'Pepitoria',
            img:"https://dojiw2m9tvv09.cloudfront.net/4210/product/mani-japone-spa-ginaweb1913.jpg",
            precio:'0.25',
            cantidad:'30'
        }
    ]
    return ( ArrayDulces );
}
function PicantesArray() {
    const ArrayPicantes = [
        {
            id:0,
            nombre:'Mani Japones',
            img:"https://dojiw2m9tvv09.cloudfront.net/4210/product/mani-japone-spa-ginaweb1913.jpg",
            precio:'0.25',
            cantidad:'30'
        },
        {
            id:1,
            nombre:'Platanitos',
            img:"https://dojiw2m9tvv09.cloudfront.net/4210/product/mani-japone-spa-ginaweb1913.jpg",
            precio:'0.25',
            cantidad:'30'
        },
        {
            id:2,
            nombre:'Mani Mixto',
            img:"https://dojiw2m9tvv09.cloudfront.net/4210/product/mani-japone-spa-ginaweb1913.jpg",
            precio:'0.25',
            cantidad:'30'
        },
        {
            id:3,
            nombre:'Pepitoria',
            img:"https://dojiw2m9tvv09.cloudfront.net/4210/product/mani-japone-spa-ginaweb1913.jpg",
            precio:'0.25',
            cantidad:'30'
        }
    ]
    return ( ArrayPicantes );
}
function PedidosArray() {
    const rows = [
      {nombre:'Nombre1',fecha:'14/07/22',monto:'$22.50',id:1},
      {nombre:'Nombre2',fecha:'15/07/22',monto:'$20.00',id:2},
      {nombre:'Nombre3',fecha:'16/07/22',monto:'$29.75',id:3},
      {nombre:'Nombre4',fecha:'16/07/22',monto:'$5.75',id:4},
      {nombre:'Nombre5',fecha:'17/07/22',monto:'$9.00',id:5},
      {nombre:'Nombre6',fecha:'18/07/22',monto:'$50.00',id:6},
      {nombre:'Nombre7',fecha:'19/07/22',monto:'$26.75',id:7},
      {nombre:'Nombre8',fecha:'20/07/22',monto:'$7.75',id:8},
      {nombre:'Nombre9',fecha:'21/07/22',monto:'$35.00',id:9},
      {nombre:'Nombre10',fecha:'22/07/22',monto:'$21.25',id:10},
      {nombre:'Nombre11',fecha:'23/07/22',monto:'$30.00',id:11},
      {nombre:'Nombre12',fecha:'24/07/22',monto:'$12.50',id:12},
      {nombre:'Nombre13',fecha:'25/07/22',monto:'$17.75',id:13},
];
return (rows);
}
function DeudasArray() {
    const ArrayDeudas = [];

    ArrayDeudas.push(
        {
            id:1,
            nombre:'Rodrigo',
            apellido:'Diaz',
            inicial:'R',
            monto:'2.50',
            fecha:'02/08/22'
        },
        {
            id:2,
            nombre:'Allan',
            apellido:'Ramirez',
            inicial:'A',
            monto:'4.75',
            fecha:'29/07/22'
        },
        {
            id:3,
            nombre:'Alejandro',
            apellido:'Olmedo',
            inicial:'A',
            monto:'0.50',
            fecha:'02/08/22'
        },
        {
            id:4,
            nombre:'Gerardo',
            apellido:'Sorto',
            inicial:'G',
            monto:'22.25',
            fecha:'22/07/22'
        },
        {
            id:5,
            nombre:'Monica',
            apellido:'Pacas',
            inicial:'M',
            monto:'0.75',
            fecha:'01/08/22'
        },

    )

    return (ArrayDeudas);
}

export {DeudasArray,PedidosArray,CobrosGraficosArray, PedidosGraficosArray, InventarioGraficosArray, FinanzasGraficosArray,SaladosArray, DulcesArray, PicantesArray};