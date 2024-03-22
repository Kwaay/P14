// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    loading: false,
    employee: null,
    error: null,
  },
  reducers: {
    setEmployee: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      console.log(state, action);
      state.employee = action.payload;
    },
  },
});

export default employeeSlice.reducer;
