import React from 'react'
import { Avatar, Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';//AÑADIR

const addButtonSyled = {
    width:"fit-content",
    borderRadius:"20px",
    color:"hotpink",
    borderColor:"hotpink",
    "&:focus": {
        borderColor:"hotpink",
      },
      "&:hover": {
        borderColor:"hotpink",
      }
    }

function UserInfoNav() {
    return (
        <>
            <Stack  direction="column" alignItems="Center" spacing={1} pt={8} pb={2} sx={{background:"lavenderblush"}}>
                <Avatar
                    alt="User Photo"
                    src="https://i.pinimg.com/736x/e7/0a/4c/e70a4c9a51ed64b04f71bbae16a9d91b.jpg"
                    sx={{ width: '120px', height: '120px', objectFit:"cover" }}
                />
            </Stack>
            <Stack sx={{background:"lavenderblush"}} pb={2}>
                <Typography variant="h5" align="center">
                    Rodrigo Diaz
                </Typography>
                <Typography variant="caption" align="center">
                    rodrigo.diaz8b@gmail.com
                </Typography>
                <Stack display="flex" alignItems="center" mt="0.5em">
                    {/*TODO CREAR modal de nueva venta*/}
                    <Button sx={addButtonSyled} startIcon={<AddIcon />} variant="outlined">Nueva venta</Button>
                </Stack>
            </Stack>
        </>
     );
}

export {UserInfoNav};