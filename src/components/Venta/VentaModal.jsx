import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

function VentaModal({open, setOpen}) {

    const CheckboxStyled={
        color: 'hotpink',
        '&.Mui-checked': {
        color: 'hotpink',
    },}

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    borderRadius:"20px",
    boxShadow: 24,
    p: 4,
  };
    return (
        <Modal
            aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
            <Fade in={open}>
                <Box sx={style}>

                </Box>
            </Fade>
        </Modal>
     );
}

export {VentaModal};