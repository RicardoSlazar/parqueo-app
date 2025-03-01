import React from 'react';
import { useSelector } from 'react-redux';
import Espacio from './Espacio';

const PlanoParqueo = ({ zona }) => {
  const espacios = useSelector(state => state.parqueo.zonas[zona]);

  return (
    <div className="text-center">
      <h3>{zona}</h3>
      <div className="d-flex flex-wrap justify-content-center">
        {espacios.map((ocupado, index) => (
          <Espacio key={index} index={index} ocupado={ocupado} zona={zona} />
        ))}
      </div>
    </div>
  );
};

export default PlanoParqueo;