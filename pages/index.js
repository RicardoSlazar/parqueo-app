import React from 'react';
import SelectorZona from '../components/SelectorZona';
import ResumenReserva from '../components/ResumenReserva';

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Parqueos Disponibles</h1>
      <SelectorZona />
      <ResumenReserva />
    </div>
  );
};

export default Home;
