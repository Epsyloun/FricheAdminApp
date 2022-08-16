import React from 'react'
 import { Grid } from '@mui/material';
import { HorizontalCard } from '../GenericComponents/HorizontalCard';
import { VerticalCard } from '../GenericComponents/VerticalCard';
import { GraficosTemplate } from '../GraficosComponents/GraficosTemplate';
import { useThemeHook } from '../../hooks/useTheme';

 function HomeList() {
  const colors = useThemeHook()

    const data = {
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
      };

    const data2 = {
        labels: [
          'Salado',
          'Picante',
          'Dulce'
        ],
        datasets: [{
          borderColor:'transparent',
          label: 'Producto',
          data: [300, 50, 100],
          backgroundColor: [
            colors.palette.secondary.main,
            'rgba(255, 205, 86)',
            'skyblue'
          ],
          hoverOffset: 8
        }]
    };

    const data3 = {
      labels: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio'
        ],
      datasets: [{
        label: 'Suma de ventas mensuales',
        backgroundColor: colors.palette.secondary.main,
        borderColor: colors.palette.secondary.main,
        data: [5, 0, 5, 2, 20, 45, 30],
      }]
    };

    return (
        <Grid container spacing={2} display="flex" alignItems="stretch">
            <Grid item xs={12} md={3}>
                <HorizontalCard
                    image={'attach_money'}
                    title={'Producto mas vendido'}
                    info={'Mani japones'}
                    subtitle={'42% de las ventas'}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <HorizontalCard
                            image={'trending_up'}
                            title={'Categoria mas vendida'}
                            info={'Salados'}
                            subtitle={'62% de las ventas'}
                        />

            </Grid>
            <Grid item xs={12} md={3}>
                <HorizontalCard
                            image={'money_off'}
                            title={'Producto menos vendida'}
                            info={'Paletas de chile'}
                            subtitle2={'0% de las ventas'}
                        />

            </Grid>
            <Grid item xs={12} md={3}>
                <HorizontalCard
                            image={'trending_down'}
                            title={'Categoria menos vendida'}
                            info={'Picante'}
                            subtitle2={'12% de las ventas'}
                        />

            </Grid>
            <Grid item xs={12} md={4}>
                <VerticalCard
                    image={<GraficosTemplate
                        type={"bar"}
                        data={data}
                        name={'masVendido'}
                        height=""
                    />
                    }
                    title={'Venta por dia'}
                    subtitle={'Ultima semana'}
                />
            </Grid>
            <Grid item xs={12} md={4} >
                <VerticalCard
                    image={<GraficosTemplate
                        type={"doughnut"}
                        data={data2}
                        name={'masVendid2'}
                        height=""
                    />
                    }
                    title={'Inventario por categoria'}
                    subtitle={'Ultima semana'}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <VerticalCard
                    image={<GraficosTemplate
                        type={"line"}
                        data={data3}
                        name={'masVendid3'}
                        height=""
                    />
                    }
                    title={'Ventas por mes'}
                    subtitle={'Ultima semana'}
                />
            </Grid>
        </Grid>
     );
 }

 export {HomeList};