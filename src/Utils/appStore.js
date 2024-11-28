import {configureStore} from "@reduxjs/toolkit";
import configSlice from "./configSlice";
import newTodosSlice from "./newTodosSlice";
import allNotesSlice from "./allNotesSlice";

const appStore= configureStore({
    reducer:{
        config:configSlice,
        newTodo:newTodosSlice,
        allNotes:allNotesSlice,
    }
})
export default appStore;