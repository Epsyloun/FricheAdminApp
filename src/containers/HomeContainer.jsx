import React from 'react';
import { Title } from '../components/GenericComponents/Title';
import { HomeList } from '../components/HomeComponents/HomeList';

function HomeContainer() {
    return (
      <>
        <Title
                titleText="Bienvenido, Usuario"
            />
        <HomeList/>
      </>
    );
}

  export {HomeContainer};