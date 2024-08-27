import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducers/index';

const store = configureStore({
  reducer: rootReducer, // Pass the rootReducer directly
});

export default store;
