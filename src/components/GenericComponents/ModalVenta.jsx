import React from 'react'
import {VentaModal} from '../VentaComponents/VentaModal';

function ModalVenta({open, setOpen}) {

    return (
        <VentaModal
            open={open}
            setOpen={setOpen}
        />
    );
}

export {ModalVenta};