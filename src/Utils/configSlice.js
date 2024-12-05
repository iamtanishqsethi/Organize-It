import {createSlice} from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        isMenuOpen: true,
        isMobileMenuOpen: false,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        },
        closeMenu:(state)=>{
            state.isMenuOpen = false
        },
        toggleMobileMenu:(state)=>{
            state.isMobileMenuOpen = !state.isMobileMenuOpen
        },
        closeMobileMenu:(state)=>{
            state.isMobileMenuOpen = false
        }
    }
})
export const {toggleMenu,closeMenu,toggleMobileMenu,closeMobileMenu}=configSlice.actions;
export default configSlice.reducer;