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
            console.log(data);
        } catch (error) {
            console.error('Error creating todo:', error);
        }
    };

    return createTodo;
};
