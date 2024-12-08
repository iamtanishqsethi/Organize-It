import {useRef, useState} from "react";
import { useDispatch } from "react-redux";
import { createNewTodo } from "../Utils/newTodosSlice";
import { useCreateNote } from "../Utils/useCreateNote";
import {useGetAllTodo} from "../Utils/useGetAllTodo";
import AddIcon from '@mui/icons-material/Add';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {modulesCode} from "../Utils/constants";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const NewNote = () => {
    const title = useRef(null);
    const description = useRef(null);
    const dispatch = useDispatch();
    const createTodo = useCreateNote(); // Get the API call function from the hook
    const getTodo=useGetAllTodo()

    const [showMessage,setShowMessage] = useState(false);
    const [message,setMessage]=useState(<h1 className="flex items-center gap-2">Note Created <CheckIcon fontSize="small"/></h1>)
    const [value, setValue] = useState('');

    const modules=modulesCode
    const handleClick = async () => {
        const newTitle = title.current.value;
        // const newDescription = description.current.value;
        const newDescription=value
        dispatch(createNewTodo({ title: newTitle, description: newDescription }));

        const isCreated=await createTodo(newTitle, newDescription);
        await getTodo()
        title.current.value=""
        // description.current.value=""
        setValue("")
        if(!isCreated){
            setMessage(<h1 className="flex items-center gap-2">Enter valid Data <CloseIcon fontSize="small"/></h1>)
        }
        setShowMessage(true)
        setInterval(() => setShowMessage(false), 3000)



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
            <div
                className={`
                    fixed top-20 left-1/2 transform -translate-x-1/2 
                    text-white font-medium bg-blue-700 rounded p-3 
                    transition-all duration-500 ease-in-out
                    ${showMessage
                    ? 'opacity-100 translate-y-0 z-50'
                    : 'opacity-0 -translate-y-full -z-50'
                }
                `}
            >
                {message}
            </div>
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

