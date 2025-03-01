import React from 'react';
import { useSelector } from 'react-redux';

const ResumenReserva = () => {
  const reserva = useSelector(state => state.parqueo.reserva);

  if (!reserva) return <p className="text-center">No hay reservas.</p>;

  return (
    <div className="alert alert-info text-center">
      <h4>Reserva</h4>
      <p>Zona: {reserva.zona}</p>
      <p>Espacio: {reserva.index + 1}</p>
      <p>Duración: {reserva.tiempo} horas</p>
      <p>Total: ${reserva.total}</p>
    </div>
  );
};

export default ResumenReserva;