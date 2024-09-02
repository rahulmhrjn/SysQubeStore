import { createStore } from 'redux';
import rootReducer from './reducers'; // Adjust the path as necessary

const store = createStore(
  rootReducer,
  // Apply middleware if needed, e.g., Redux Thunk
);

export default store;