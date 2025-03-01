import React from 'react';
import { useDispatch } from 'react-redux';
import { reservarEspacio, liberarEspacio } from '../store/parqueoSlice';

const Espacio = ({ index, ocupado, zona }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (ocupado) {
      dispatch(liberarEspacio({ zona, index }));
    } else {
      const tiempo = prompt('Ingrese la duración en horas:');
      if (tiempo) dispatch(reservarEspacio({ zona, index, tiempo: Number(tiempo) }));
    }
  };

  return (
    <button
      className={`btn ${ocupado ? 'btn-danger' : 'btn-success'} m-2`}
      onClick={handleClick}
    >
      {ocupado ? 'Ocupado' : 'Disponible'}
    </button>
  );
};

export default Espacio;