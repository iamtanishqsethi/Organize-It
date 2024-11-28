import { useRef } from "react";
import { useDispatch } from "react-redux";
import { createNewTodo } from "../Utils/newTodosSlice";
import { useCreateTodo } from "../Utils/useCreateTodo";
import {useGetAllTodo} from "../Utils/useGetAllTodo";

const NewNote = () => {
    const title = useRef(null);
    const description = useRef(null);
    const dispatch = useDispatch();
    const createTodo = useCreateTodo(); // Get the API call function from the hook


    const handleClick = () => {
        const newTitle = title.current.value;
        const newDescription = description.current.value;

        // Update Redux state
        dispatch(createNewTodo({ title: newTitle, description: newDescription }));

        // Trigger API call
        createTodo(newTitle, newDescription);

    };

    return (
        <div className="col-span-10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 p-10">
            <input
                ref={title}
                type="text"
                placeholder="New Note"
                className="block w-3/4 m-3 p-3 bg-transparent font-extrabold text-4xl font-roboto focus:outline-none"
            />
            <button
                className="bg-blue-700 p-3 m-3 font-roboto"
                onClick={handleClick}
            >
                Create new note
            </button>
            <textarea
                ref={description}
                className="w-full h-4/6 m-3 p-3 bg-transparent focus:outline-none"
                placeholder="What's on your mind today...."
            ></textarea>
        </div>
    );
};

export default NewNote;

