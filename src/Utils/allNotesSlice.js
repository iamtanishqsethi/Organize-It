import {createSlice} from "@reduxjs/toolkit";

const allNotesSlice = createSlice({
    name: "allNotes",
    initialState: {
        notes:[]
    },
    reducers:{
        setNotes: (state, action) => {
            state.notes = action.payload;
        }
    }
})
export const {setNotes} = allNotesSlice.actions;
export default allNotesSlice.reducer
