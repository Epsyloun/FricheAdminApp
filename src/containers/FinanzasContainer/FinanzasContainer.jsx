import React from 'react'
import { FinanzasList } from '../../components/FinanzasComponents/FinanzasList';
import { Title } from '../../components/GenericComponents/Title';


function FinanzasContainer() {
    return (
    <div className="content-container">
        <Title
            titleText="Finanzas"
        />
        <FinanzasList/>
    </div>
    );
}

export {FinanzasContainer};