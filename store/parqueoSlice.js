import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  zonas: {
    Cubierto: Array(10).fill(false),
    Descubierto: Array(10).fill(false),
    VIP: Array(5).fill(false),
  },
  reserva: null,
};

const parqueoSlice = createSlice({
  name: 'parqueo',
  initialState,
  reducers: {
    reservarEspacio: (state, action) => {
      const { zona, index, tiempo } = action.payload;
      state.zonas[zona][index] = true;
      state.reserva = { zona, index, tiempo, total: tiempo * 5 };
    },
    liberarEspacio: (state, action) => {
      const { zona, index } = action.payload;
      state.zonas[zona][index] = false;
      state.reserva = null;
    },
  },
});

export const { reservarEspacio, liberarEspacio } = parqueoSlice.actions;
export default parqueoSlice.reducer;