import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";


export const Store = configureStore({
    reducer: {
      // loged: loginSlice.reducer,
      Auth:AuthSlice.reducer,
  
    },
  
  });
  