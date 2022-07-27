import React from 'react'
import {Buscador} from '../components/GenericComponents/Buscador';
import {ListDeuda} from '../components/DeudasComponents/ListDeuda';
import {Title} from '../components/GenericComponents/Title';

function DeudasContainer() {

    return (
        <>
            <Title
                titleText="Cobros"
            />
            <Buscador/>
            <ListDeuda/>
        </>
     );
}

export {DeudasContainer};