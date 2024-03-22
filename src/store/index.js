// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './EmployeeSlice';

const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

export default store;
