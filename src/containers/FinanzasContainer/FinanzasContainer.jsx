import React from 'react'
import { Grid } from '@mui/material';
import { FinanzasHorizontalCard } from '../../components/FinanzasComponents/FinanzasHorizontalCard';
import { Title } from '../../components/GenericComponents/Title';
import { FinanzasVerticalCard } from '../../components/FinanzasComponents/FinanzasVerticalCard';

function FinanzasContainer() {
    return (
    <div className="content-container">
        <Title
            titleText="Finanzas"
        />

        <Grid container spacing={2} display="flex" alignItems="stretch">
            <Grid item xs={12} md={3}>
                <FinanzasHorizontalCard
                    image={'attach_money'}
                    title={'Dinero en caja'}
                    info={'$ 35.00'}
                    subtitle={'42% de las ventas'}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <FinanzasHorizontalCard
                    image={'payments'}
                    title={'Suma de cobros'}
                    info={'$ 45.75'}
                    subtitle={'+22% de ingresos'}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <FinanzasHorizontalCard
                    image={'receipt_long'}
                    title={'Dinero de pedidos'}
                    info={'$ 45.75'}
                    subtitle={'+50% de ingresos'}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <FinanzasHorizontalCard
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
            <FinanzasVerticalCard
                    image={'view_list'}
                    title={'Lista con inputs para cambiar opciones, como dinero en caja y dinero en inventario'}
                    info={'form con inputs y botones'}
                    subtitle={''}
                />
            </Grid>
        </Grid>
    </div>
    );
}

export {FinanzasContainer};