import React, { useEffect } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
//New icons
import AddIcon from '@mui/icons-material/Add';//AÑADIR
import HomeIcon from '@mui/icons-material/Home';//INICIO
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';//DEUDAS
import BorderColorIcon from '@mui/icons-material/BorderColor';//PEDIDOS
import SettingsIcon from '@mui/icons-material/Settings';//AJUSTES


const VioletButton = {
    position: 'absolute',
    zIndex: 1,
    top: -70,
    left: '75%',
    right: 0,
    margin: '0 auto',
    backgroundColor: 'violet',
    color: '#fff',
    opacity:"0.8",
    "&:focus": {
      opacity: 1,
      backgroundColor: 'blueViolet '
    },
    "&:hover": {
      opacity: 1,
      backgroundColor: 'blueViolet'
    }
  };
  const OrangeText ={
    color: 'pink',
    "&.Mui-selected": {
      color: 'violet'
    }
  }

function MobileBar({setPageIndex}) {

    const [value, setValue] = React.useState('recents');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0, zIndex:1, animation: 'fadeInDown ease 1s' }} elevation={3} >
            <BottomNavigation sx={{ width: window.width }} value={value} onChange={handleChange}>
            <Fab sx={VioletButton} color="primary" aria-label="add">
                <AddIcon  />
            </Fab>
                <BottomNavigationAction
                    value="recents"
                    icon={<HomeIcon />}
                    sx={OrangeText}
                    onClick={event => setPageIndex(0)}
                />
                <BottomNavigationAction
                    value="favorites"
                    icon={<AttachMoneyIcon />}
                    sx={OrangeText}
                    onClick={event => setPageIndex(1)}
                />
                <BottomNavigationAction
                    value="nearby"
                    icon={<BorderColorIcon />}
                    sx={OrangeText}
                    onClick={event => setPageIndex(2)}
                />
                <BottomNavigationAction
                    value="folder"
                    icon={<SettingsIcon />}
                    sx={OrangeText}
                    onClick={event => setPageIndex(7)}
                />
            </BottomNavigation>
        </Paper>
     );
}

export {MobileBar};