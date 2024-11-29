import {useDispatch} from "react-redux";
import {setNotes} from "./allNotesSlice";
import {useCallback} from "react";

export const useGetAllTodo=()=>{
    const dispatch=useDispatch();


    const getAllTodo= useCallback(async ()=>{//using memoization to avoid infinite re renders
        // const fetch = require('node-fetch');

        const url = 'https://api.freeapi.app/api/v1/todos/';
        const options = {
            method: 'GET',
            headers: {accept: 'application/json'}};
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            // console.log(data);
            dispatch(setNotes(data?.data))
        } catch (error) {
            console.error(error);
        }
    },[dispatch])//render again when the dispatch is triggered
    return getAllTodo;

}