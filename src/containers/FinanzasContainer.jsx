import React from 'react'
import { FinanzasList } from '../components/FinanzasComponents/FinanzasList';
import { Title } from '../components/GenericComponents/Title';


function FinanzasContainer() {
    return (
    <>
        <Title
            titleText="Finanzas"
        />
        <FinanzasList/>
    </>
    );
}

export {FinanzasContainer};