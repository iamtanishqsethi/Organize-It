import {useDispatch, useSelector} from "react-redux";
import {setNotes} from "./allNotesSlice";
import {useEffect} from "react";

export const useGetAllTodo=()=>{
    const dispatch=useDispatch();


    const getAllTodo= async ()=>{
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
    }
    return getAllTodo;

}