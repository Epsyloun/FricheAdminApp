import React from 'react';

import { useTheme } from '@mui/material/styles';
import { InventarioCard } from './InventarioCard';
import { Grid } from '@mui/material';

function TabsInventario({data}) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Grid container spacing={2} sx={{justifyContent:'center'}}>
    {data.map((index)=>(
      <Grid item key={index.id}>
        <InventarioCard
          title={data[index.id].nombre}
          img={data[index.id].img}
          precio={data[index.id].precio}
          cantidad={data[index.id].cantidad}
        />
    </Grid>
    ))}
    </Grid>
  );
}


export {TabsInventario};
