export const useCreateNote = () => {
    const url = 'https://api.freeapi.app/api/v1/todos/';
    const createTodo = async (title, description) => {
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
            },
            body: JSON.stringify({ title, description }), // Correctly format JSON
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            if(data.statusCode===422){
                return false;

            }
            return true;


        } catch (error) {
            console.error('Error creating note:', error);
            return false;
        }
    };

    return createTodo;
};
