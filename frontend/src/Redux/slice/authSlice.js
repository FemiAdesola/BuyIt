import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userData: localStorage.getItem('userData')
      ? JSON.parse(localStorage.getItem('userData'))
      : null,
  };


  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userData = action.payload;
            localStorage.setItem('userData', JSON.stringify(action.payload));
      
            const expirationTime = new Date().getTime() + 20 * 24 * 60 * 60 * 1000; // 20 days
            localStorage.setItem('expirationTime', expirationTime);
          },
    },

  });

  export const { setCredentials} = authSlice.actions;
  export default authSlice.reducer;