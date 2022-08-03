import React from 'react'
import { Divider, Grid, Typography } from '@mui/material';
import { VerticalCard } from '../GenericComponents/VerticalCard';
import { GraficosTemplate } from './GraficosTemplate';
import { useTheme } from '../../hooks/useTheme';
import { SliderMedia } from './GraficosPanel';



function GraficosList() {
    const StyledTypo={
        animation: 'fade-in ease 2.5s'
    }
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
        <Typography sx={StyledTypo} mt="0.5em" mb="0.5em" variant="h4" color="text.accent" align="center">
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

        <Typography sx={StyledTypo} mt="0.5em" mb="0.5em" variant="h4" color="text.accent" align="center">
        <Divider/>
            Pedidos
        <Divider/>
        </Typography>
        <Grid container>
             <SliderMedia/>
        </Grid>

        <Typography sx={StyledTypo} mt="0.5em" mb="0.5em" variant="h4" color="text.accent" align="center">
        <Divider/>
            Inventario
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

        <Typography sx={StyledTypo} mt="0.5em" mb="0.5em" variant="h4" color="text.accent" align="center">
        <Divider/>
            Finanzas
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
    </>
     );
}

export {GraficosList};