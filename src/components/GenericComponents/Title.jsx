import React from 'react'
import { Typography } from '@mui/material';

function Title({titleText}) {
    return (
        <Typography variant="h3"color="text.primary"  mb="0.3em" mt="0.3em" className='title-section'>
            {titleText}
        </Typography>
     );
}

export {Title};