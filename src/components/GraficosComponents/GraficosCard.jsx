import React from 'react';
import Card from '@mui/material/Card';

//Styled Components
    const StyledCard = {
        display: 'flex',
        height:"100%",
        flexDirection:"column",
        borderRadius: '20px',
        animation: 'fade-in-down ease 0.5s',
    }

function GraficosCard({image,title,subtitle}) {
    return (
        <Card sx={StyledCard}>
            {image}
        </Card>
    );
}

export {GraficosCard};