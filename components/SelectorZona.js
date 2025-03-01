import React, { useState } from 'react';
import PlanoParqueo from './PlanoParqueo';

const SelectorZona = () => {
  const [zona, setZona] = useState('Cubierto');

  return (
    <div className="text-center">
      <select className="form-select w-50 m-auto" onChange={e => setZona(e.target.value)}>
        <option value="Cubierto">Cubierto</option>
        <option value="Descubierto">Descubierto</option>
        <option value="VIP">VIP</option>
      </select>
      <PlanoParqueo zona={zona} />
    </div>
  );
};

export default SelectorZona;