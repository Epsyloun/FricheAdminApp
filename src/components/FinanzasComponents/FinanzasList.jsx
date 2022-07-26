import React from 'react';
import { FinanzasVerticalCard } from '../../components/FinanzasComponents/FinanzasVerticalCard';
import { Grid } from '@mui/material';
import { FinanazasOptions } from './FinanzasOptions';
function FinanzasList() {
    return (
    <>
        <Grid container spacing={2} display="flex" alignItems="stretch">
            <Grid item xs={12} md={3}>
                <FinanzasVerticalCard
                    image={'attach_money'}
                    title={'Dinero en caja'}
                    info={'$ 35.00'}
                    subtitle={'42% de las ventas'}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <FinanzasVerticalCard
                    image={'payments'}
                    title={'Dinero de cobros'}
                    info={'$ 45.75'}
                    subtitle={'+22% de ingresos'}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <FinanzasVerticalCard
                    image={'receipt_long'}
                    title={'Dinero de pedidos'}
                    info={'$ 45.75'}
                    subtitle={'+50% de ingresos'}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <FinanzasVerticalCard
                    image={'store'}
                    title={'Dinero de inventario'}
                    info={'$ 45.75'}
                    subtitle={''}
                />
            </Grid>
            <Grid item xs={12} md={6} className="finanzas-settings">
            <FinanzasVerticalCard
                    image={'query_stats'}
                    title={'Ventas en el mes'}
                    info={'$ 100.75'}
                    subtitle={''}
                />
            </Grid>
            <Grid item xs={12} md={6} >
                <FinanazasOptions/>
            </Grid>
        </Grid>
    </>
     );
}

export {FinanzasList};