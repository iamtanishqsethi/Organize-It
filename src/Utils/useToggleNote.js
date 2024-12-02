import {useCallback} from "react";

export const useToggleNote=()=>{
    const toggleNote=useCallback(async (id)=>{
        // const fetch = require('node-fetch');

        const url = 'https://api.freeapi.app/api/v1/todos/toggle/status/'+id;
        const options = {method: 'PATCH', headers: {accept: 'application/json'}};

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    },[])
    return toggleNote;
}