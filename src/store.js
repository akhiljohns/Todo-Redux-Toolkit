import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './todoSlice';

const store = configureStore({
 reducer: {
 todos: todoReducer,
 },
});
removeEventListener
export default store;