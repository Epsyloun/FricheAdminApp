import React from 'react'
import { Divider, Grid, Typography } from '@mui/material';
import { SliderGraficos } from './Slider';
import {CobrosGraficosArray, FinanzasGraficosArray, InventarioGraficosArray, PedidosGraficosArray} from './GraficosArray'

//StyledComponent
const StyledTypo={
    animation: 'fade-in ease 2.5s'
}

function GraficosList() {
    const GraficosCorbros = CobrosGraficosArray()
    const GraficosPedidos = PedidosGraficosArray()
    const GraficosInventario = InventarioGraficosArray()
    const GraficosFinanzas = FinanzasGraficosArray()
    return (
    <>
        <Typography sx={StyledTypo} mt="0.5em" mb="0.5em" variant="h4" color="text.accent" align="center">
            <Divider/>
                Cobros
            <Divider/>
        </Typography>
        <Grid container>
             <SliderGraficos name="Cobros" data={GraficosCorbros}/>
        </Grid>


        <Typography sx={StyledTypo} mt="0.5em" mb="0.5em" variant="h4" color="text.accent" align="center">
        <Divider/>
            Pedidos
        <Divider/>
        </Typography>
        <Grid container>
             <SliderGraficos name="Pedidos" data={GraficosPedidos}/>
        </Grid>

        <Typography sx={StyledTypo} mt="0.5em" mb="0.5em" variant="h4" color="text.accent" align="center">
        <Divider/>
            Inventario
        <Divider/>
        </Typography>
        <Grid container>
             <SliderGraficos name="Inventario" data={GraficosInventario}/>
        </Grid>


        <Typography sx={StyledTypo} mt="0.5em" mb="0.5em" variant="h4" color="text.accent" align="center">
        <Divider/>
            Finanzas
        <Divider/>
        </Typography>
        <Grid container>
             <SliderGraficos name="Finanzas" data={GraficosFinanzas}/>
        </Grid>

    </>
     );
}

export {GraficosList};