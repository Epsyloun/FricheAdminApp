import React, { useEffect, useState } from 'react';
import { Title } from '../components/GenericComponents/Title';
import { HomeList } from '../components/HomeComponents/HomeList';
import { LoaderHome } from '../components/GenericComponents/Skeletons';

function HomeContainer() {
  const [loader, setLoader] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    },[loader])
    return (
      <>
        <Title
                titleText="Bienvenido, Usuario"
            />
        {loader && <LoaderHome/>}
        {!loader && <HomeList/>}
      </>
    );
}

  export {HomeContainer};