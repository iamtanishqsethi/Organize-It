export const useDeleteNote = () => {

    const deleteNote=async (id)=>{
        const url = 'https://api.freeapi.app/api/v1/todos/'+id;
        const options = {method: 'DELETE', headers: {accept: 'application/json'}};

        try {
            const response = await fetch(url, options);
            const data = await response.json();
        } catch (error) {
            console.error(error);
        }
    }
    return deleteNote;
}
