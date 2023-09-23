import { configureStore } from "@reduxjs/toolkit";
import Redux1 from "./Redux1";

export default configureStore({
    reducer:{
        me:Redux1
    }
})