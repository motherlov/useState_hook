import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

const initialState = {};
export const login = createAsyncThunk("/user/signin", async (formData) => {
    let res = await axiosInstance.post(`/user/signin/`, formData);
    let resData = res?.data;
    return resData;
  }
);
export const signup = createAsyncThunk("/user/signup",async (formData) => {
    let res = await axiosInstance.post(`/user/signup/`, formData);
    let resData = res?.data;
    return resData;
  }
);
// export const addProduct = createAsyncThunk("/products/add", async (product) => {
//   let res = await axiosInstance.post(`/products/add`, product);
//   let resData = res?.data;
//   return resData;
// });

export const AuthSlice = createSlice({name: "registration", initialState, reducers: { },
    extraReducers: (builder) => {
      builder
       
        .addCase(login.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(login.fulfilled, (state, {payload}) => {
          state.status = "idle";
        })
        .addCase(login.rejected, (state, action) => {
          state.status = "idle";
        })

        .addCase(signup.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(signup.fulfilled, (state, {payload}) => {
          state.status = "idle";
        })
        .addCase(signup.rejected, (state, action) => {
          state.status = "idle";
        })

        // .addCase(addProduct.pending, (state, action) => {
        //   state.status = "loading";
        // })
        // .addCase(addProduct.fulfilled, (state, {payload}) => {
        //   state.status = "idle";
        // })
        // .addCase(addProduct.rejected, (state, action) => {
        //   state.status = "idle";
        // })
    },
  });
  


export default AuthSlice