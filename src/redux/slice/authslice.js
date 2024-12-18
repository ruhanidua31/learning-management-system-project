import { createSlice } from "@reduxjs/toolkit";
import { FlatESLint } from "eslint/use-at-your-own-risk";

const initialstate = {
    isloggedin: localStorage.getitem('isloggedin') || false,
    role: localStorage.getItem('role') || '',
    date: localStorage.getItem('data') || {}
};

const authslice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
});

export default authslice.reducer;