import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AlertState {
  message: string;
  active: boolean;
  type: 'success' | 'danger' | 'warning';
}

const initialState: AlertState = {
  message: '',
  active: false,
  type: 'success',
};

export const AlertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state, action: PayloadAction<Omit<AlertState, 'active'>>) => {
      state.message = action.payload.message;
      state.active = true;
      state.type = action.payload.type;
    },
    hideAlert: (state) => {
      state.active = false;
      state.message = '';
      state.type = 'success';
    },
  },
});

export const { showAlert, hideAlert } = AlertSlice.actions;

export default AlertSlice.reducer;
