import React from 'react'
import {Buscador} from '../../components/GenericComponents/Buscador';
import {ListDeuda} from '../../components/DeudasComponents/ListDeuda';
import {Title} from '../../components/GenericComponents/Title';

function DeudasContainer() {

    return (
    <div className="content-container">
        <Title
            titleText="Cobros"
        />
        <Buscador/>
        <ListDeuda/>
    </div >
     );
}

export {DeudasContainer};