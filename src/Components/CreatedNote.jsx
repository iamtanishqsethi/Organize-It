import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDeleteNote } from "../Utils/useDeleteNote";
import { useUpdateNote } from "../Utils/useUpdateNote";
import {useGetAllTodo} from "../Utils/useGetAllTodo";
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import RuleIcon from '@mui/icons-material/Rule';
import {useToggleNote} from "../Utils/useToggleNote";
import {formatDate, modulesCode} from "../Utils/constants";
import ReactQuill from "react-quill";
import CheckIcon from "@mui/icons-material/Check";
const CreatedNote = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const data = useSelector((store) => store.allNotes?.notes);
    const [note, setNote] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isComplete,setIsComplete] = useState(null);
    const [createdAt,setCreatedAt] = useState("");
    const [updatedAt,setUpdatedAt] = useState("");
    const [readOnly, setReadOnly] = useState(true);
    const [showMessage,setShowMessage] = useState(false);



    const getTodo=useGetAllTodo()
    const updateNote = useUpdateNote();
    const deleteNote = useDeleteNote();
    const toggleNote=useToggleNote()

    const modules=modulesCode


    const handleDelete = async () => {
        await deleteNote(id);
        await getTodo()
        navigate("/notes");
    };

    const handleUpdate = async () => {
        await updateNote(id, title, description);
        await getTodo()
        setReadOnly(true);
        setShowMessage(true)
        setTimeout(()=>{
            setShowMessage(false)
                console.log('interval')
            }
            ,3000)

    };
    const handleToggle=async ()=>{
        await toggleNote(id)
        await getTodo()
        setIsComplete(!isComplete);
        setShowMessage(true)
        setTimeout(()=>setShowMessage(false),3000)
    }

    useEffect(() => {
        const foundNote = data?.find((x) => x._id === id);
        if (foundNote) {
            setIsComplete(foundNote.isComplete)
            setNote(foundNote);
            setTitle(foundNote.title);
            setDescription(foundNote.description);
            setCreatedAt(formatDate(foundNote.createdAt))
            setUpdatedAt(formatDate(foundNote.updatedAt))
        }
    }, [data,id]);

    if (!note) {
        return (
            <div className="md:col-span-10 w-screen md:w-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 p-2 md:p-7  ">
                <p className="text-white font-bold text-xl">Loading...</p>
            </div>
        );
    }

    return (
        <div
            className="md:col-span-10 w-screen md:w-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 p-2 md:p-7  ">
            <input
                type="text"
                placeholder="Created Note"
                className="block w-3/4 m-3 p-3 bg-transparent font-extrabold text-4xl font-roboto focus:outline-none"
                readOnly={readOnly}
                value={title}
                onChange={(e) => setTitle(e.target.value)} // Update title state
            />
            <div className={' flex   justify-start'}>
                {!readOnly ? (
                    <button
                        className="text-gray-400  font-medium  hover:text-blue-700 transition ease-in-out p-2 mx-1.5 md:mx-3 font-roboto rounded-lg"
                        onClick={handleUpdate}
                    >
                        Update <UpgradeIcon fontSize={"small"}/>
                    </button>
                ) : (
                    <button
                        className="text-gray-400  font-medium hover:text-blue-700 transition ease-in-out p-2 mx-1.5 md:mx-3 font-roboto rounded-lg"
                        onClick={() => setReadOnly(false)}
                    >
                        Edit <CreateIcon fontSize={"small"}/>
                    </button>
                )}
                <button
                    className=" text-gray-400 font-medium hover:text-red-500 transition ease-in-out p-2 mx-1.5 md:mx-3 font-roboto rounded-lg"
                    onClick={handleDelete}
                >
                    Delete <DeleteIcon fontSize={"small"}/>
                </button>

                <button
                    className={` text-gray-400 font-medium ${isComplete ? "hover:text-red-500" : "hover:text-blue-700"} transition ease-in-out p-2 mx-1.5 md:mx-3 font-roboto rounded-lg`}
                    title={isComplete ? "Mark pending ?" : "Mark Completed ?"}
                    onClick={handleToggle}
                >{isComplete ? "  Completed" : "Pending"}<RuleIcon className={"mx-2"}/>
                </button>

            </div>
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
                <h1 className="flex items-center gap-2">
                    Updated Note <CheckIcon fontSize="small"/>
                </h1>
            </div>
            <div className={'flex justify-start'}>
                <span className={` text-gray-400 font-medium   p-2 mx-1.5 md:mx-3 font-roboto `}>
                    Created : {createdAt}
                </span>
                <span className={` text-gray-400 font-medium   p-2 mx-1.5 md:mx-3 font-roboto `}>
                    Updated : {updatedAt}
                </span>
            </div>
            <div className={'w-full h-0.5 my-1 rounded-lg bg-zinc-600'}></div>
            <ReactQuill
                className={"border-0 w-full h-3/5 p-3 md:text-lg"}
                theme={"snow"}
                value={description}
                onChange={setDescription}
                modules={modules}
                readOnly={readOnly}
            />
        </div>
    );
};

export default CreatedNote;
