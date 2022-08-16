import React, { useEffect, useState } from 'react'
import { FinanzasList } from '../components/FinanzasComponents/FinanzasList';
import { Title } from '../components/GenericComponents/Title';
import { LoaderFinanzas } from '../components/GenericComponents/Skeletons';


function FinanzasContainer() {
    const [loader, setLoader] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    },[loader])
    return (
    <>
        <Title
            titleText="Finanzas"
        />
        {loader && <LoaderFinanzas/>}
        {!loader && <FinanzasList/>}
    </>
    );
}

export {FinanzasContainer};