import { configureStore } from "@reduxjs/toolkit";
import authslicereducer from './slice/authslice';
const store = configureStore({
    reducer: {
        auth: authslicereducer
    },
    devtools: true
});

export default store;