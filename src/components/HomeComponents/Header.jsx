import React from 'react'
import { Typography } from '@mui/material';

//Arreglo de meses
const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Augosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

//Componente de fecha
function Fecha() {
    const fecha = new Date();
    const diaf = fecha.getDate()
    const mes = monthNames[fecha.getMonth()];
    const ano = fecha.getFullYear()
    return (
        <div className='fecha-bloque header-style'>
            <span className='fecha'>{diaf} {mes} {ano}</span>
        </div>
     );
}

function HeaderText() {
    return (
    <>
            <Typography ml="2%" variant="subtitle1" color="black">
                <Fecha/>
            </Typography>
            <Typography ml="2%" variant="h3" color="black" className='title-section'>
                Bienvenido, usuario
            </Typography>
    </> );
}

export {Fecha, HeaderText};