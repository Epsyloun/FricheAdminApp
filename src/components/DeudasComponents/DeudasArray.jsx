import React from 'react'

function DeudasArray() {
    const ArrayDeudas = [];

    ArrayDeudas.push(
        {
            id:1,
            nombre:'Rodrigo',
            apellido:'Diaz',
            inicial:'R',
            monto:'2.50',
            fecha:'02/08/22'
        },
        {
            id:2,
            nombre:'Allan',
            apellido:'Ramirez',
            inicial:'A',
            monto:'4.75',
            fecha:'29/07/22'
        },
        {
            id:3,
            nombre:'Alejandro',
            apellido:'Olmedo',
            inicial:'A',
            monto:'0.50',
            fecha:'02/08/22'
        },
        {
            id:4,
            nombre:'Gerardo',
            apellido:'Sorto',
            inicial:'G',
            monto:'22.25',
            fecha:'22/07/22'
        },
        {
            id:5,
            nombre:'Monica',
            apellido:'Pacas',
            inicial:'M',
            monto:'0.75',
            fecha:'01/08/22'
        },

    )

    return (ArrayDeudas);
}

export {DeudasArray};