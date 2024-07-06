// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    loading: false,
    employees: [],
    error: null,
  },
  reducers: {
    setEmployee: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.employees.push(action.payload);
    },
  },
});

export const { setEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
