import {useRef, useState} from "react";
import { useDispatch } from "react-redux";
import { createNewTodo } from "../Utils/newTodosSlice";
import { useCreateNote } from "../Utils/useCreateNote";
import {useGetAllTodo} from "../Utils/useGetAllTodo";
import AddIcon from '@mui/icons-material/Add';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {modulesCode} from "../Utils/constants";

const NewNote = () => {
    const title = useRef(null);
    const description = useRef(null);
    const dispatch = useDispatch();
    const createTodo = useCreateNote(); // Get the API call function from the hook
    const getTodo=useGetAllTodo()

    const [value, setValue] = useState('');
    // console.log(value)
    const modules=modulesCode
    const handleClick = async () => {
        const newTitle = title.current.value;
        // const newDescription = description.current.value;
        const newDescription=value
        dispatch(createNewTodo({ title: newTitle, description: newDescription }));

        await createTodo(newTitle, newDescription);
        await getTodo()
        title.current.value=""
        // description.current.value=""
        setValue("")


    };

    return (
        <div className="md:col-span-10 w-screen md:w-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 p-4 md:p-10  ">

            <input
                ref={title}
                type="text"
                placeholder="New Note"
                className="block w-3/4 m-2 md:m-3 p-2 md:p-3 bg-transparent font-extrabold text-2xl md:text-4xl font-roboto focus:outline-none"
            />
            <button
                className=" text-gray-400 hover:text-white p-2 mx-3 font-medium transition ease-in-out font-roboto rounded-lg  "
                onClick={handleClick}
            >
                Create Note <AddIcon fontSize={"small"}/>
            </button>
            <div className={'w-full h-0.5 my-2 rounded-lg bg-zinc-600'}></div>


            <ReactQuill
                className={"border-0 w-full h-3/5 p-1.5 md:p-3 md:text-lg"}
                theme={"snow"}
                value={value}
                onChange={setValue}
                modules={modules}
            />

        </div>
    );
};

export default NewNote;

