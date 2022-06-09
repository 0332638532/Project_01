import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Userslice';  

// ...
const store = configureStore({
  reducer: {
    user: userSlice,
  },
  // composeWithDevTools() ,
})
export type RootState = ReturnType<typeof store.getState>

export default store