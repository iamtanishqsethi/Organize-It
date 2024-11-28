import { createSlice } from "@reduxjs/toolkit";

const newTodosSlice = createSlice({
    name: "newTodo",
    initialState: {
        title: "",
        description: ""
    },
    reducers: {
        createNewTodo: (state, action) => {
            state.title = action.payload.title;
            state.description = action.payload.description;
        }
    }
});

export const { createNewTodo } = newTodosSlice.actions;
export default newTodosSlice.reducer;
