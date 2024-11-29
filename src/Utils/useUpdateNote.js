import {useCallback} from "react";

export const useUpdateNote = () => {
    const updateNote = useCallback(async (id,title,description) => {
        const url = 'https://api.freeapi.app/api/v1/todos/'+id;
        const options = {
            method: 'PATCH',
            headers: {accept: 'application/json', 'content-type': 'application/json'},
            body: JSON.stringify({ title, description })
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    },[])
    return updateNote;
}
