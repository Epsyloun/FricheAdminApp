import React from 'react'
import { Divider, Grid, Typography } from '@mui/material';
import { VerticalCard } from '../GenericComponents/VerticalCard';
import { GraficosTemplate } from './GraficosTemplate';
import { useTheme } from '../../hooks/useTheme';



function GraficosList() {
    const colors = useTheme()
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
    return (
    <>
        <Typography mt="0.5em" mb="0.5em" variant="h4" color="text.accent" align="center">
        <Divider/>
            Cobros
        <Divider/>
        </Typography>
        <Grid item xs={12} md={4}>
                <VerticalCard
                    image={<GraficosTemplate
                        type={"bar"}
                        data={data}
                        name={'masVendido1'}
                        height=""
                    />
                    }
                    title={'Venta por dia'}
                    subtitle={'Ultima semana'}
                />
        </Grid>

        <Typography mt="0.5em" mb="0.5em" variant="h4" color="text.accent" align="center">
        <Divider/>
            Cobros
        <Divider/>
        </Typography>
        <Grid item xs={12} md={4}>
                <VerticalCard
                    image={<GraficosTemplate
                        type={"bar"}
                        data={data}
                        name={'masVendido2'}
                        height=""
                    />
                    }
                    title={'Venta por dia'}
                    subtitle={'Ultima semana'}
                />
        </Grid>

        <Typography mt="0.5em" mb="0.5em" variant="h4" color="text.accent" align="center">
        <Divider/>
            Cobros
        <Divider/>
        </Typography>
        <Grid item xs={12} md={4}>
                <VerticalCard
                    image={<GraficosTemplate
                        type={"bar"}
                        data={data}
                        name={'masVendido3'}
                        height=""
                    />
                    }
                    title={'Venta por dia'}
                    subtitle={'Ultima semana'}
                />
        </Grid>

        <Typography mt="0.5em" mb="0.5em" variant="h4" color="text.accent" align="center">
        <Divider/>
            Cobros
        <Divider/>
        </Typography>
        <Grid item xs={12} md={4}>
                <VerticalCard
                    image={<GraficosTemplate
                        type={"bar"}
                        data={data}
                        name={'masVendido4'}
                        height=""
                    />
                    }
                    title={'Venta por dia'}
                    subtitle={'Ultima semana'}
                />
        </Grid>

        <Typography mt="0.5em" mb="0.5em" variant="h4" color="text.accent" align="center">
        <Divider/>
            Cobros
        <Divider/>
        </Typography>
        <Grid item xs={12} md={4}>
                <VerticalCard
                    image={<GraficosTemplate
                        type={"bar"}
                        data={data}
                        name={'masVendido5'}
                        height=""
                    />
                    }
                    title={'Venta por dia'}
                    subtitle={'Ultima semana'}
                />
        </Grid>
    </>
     );
}

export {GraficosList};