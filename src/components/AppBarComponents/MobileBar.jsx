import React from 'react'
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
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ModalVenta } from '../GenericComponents/ModalVenta';


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
  const StyledText ={
    color: 'pink',
    "&.Mui-selected": {
      color: 'violet'
    }
  }
  const StyledPaper = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex:2,
    animation: 'fadeInDown ease 1s'
   }

function MobileBar({pageIndex,setPageIndex}) {

    const [open, setOpen] = React.useState(false);

    //handler page index
    const [value, setValue] = React.useState('recents');
    function handlerPageIndex(index){
      setPageIndex(index)
    }

    const handleChange = (event, newValue) => {
          setValue(newValue);
    };
    const StyledBottom ={ width: window.width }

    return (
        <Paper sx={StyledPaper} elevation={3} >
            <BottomNavigation sx={StyledBottom} value={value} onChange={handleChange}>
            <ModalVenta open={open} setOpen={setOpen}/>
            <Fab onClick={()=>{setOpen(!open)}}  sx={VioletButton} color="primary" aria-label="add">
                <AddIcon  />
            </Fab>
                <BottomNavigationAction
                    value="recents"
                    icon={<HomeIcon />}
                    sx={StyledText}
                    onClick={event => handlerPageIndex(0)}
                />
                <BottomNavigationAction
                    value="deudas"
                    icon={<AttachMoneyIcon />}
                    sx={StyledText}
                    onClick={event => handlerPageIndex(1)}
                />
                <BottomNavigationAction
                    value="pedidos"
                    icon={<BorderColorIcon />}
                    sx={StyledText}
                    onClick={event => handlerPageIndex(2)}
                />
                <BottomNavigationAction
                    value="ajustes"
                    icon={<MoreHorizIcon />}
                    sx={StyledText}
                    onClick={event => handlerPageIndex(7)}
                />
            </BottomNavigation>
        </Paper>
     );
}

export {MobileBar};