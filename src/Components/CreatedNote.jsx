import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDeleteNote } from "../Utils/useDeleteNote";
import { useUpdateNote } from "../Utils/useUpdateNote";
import {useGetAllTodo} from "../Utils/useGetAllTodo";
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import UpgradeIcon from '@mui/icons-material/Upgrade';
const CreatedNote = () => {
    console.log("note rendered")
    const { id } = useParams();
    const navigate = useNavigate();
    const data = useSelector((store) => store.allNotes?.notes);
    const [note, setNote] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [readOnly, setReadOnly] = useState(true);

    console.log(title)
    console.log(description)

    const getTodo=useGetAllTodo()
    const updateNote = useUpdateNote();
    const deleteNote = useDeleteNote();

    const handleDelete = async () => {
        await deleteNote(id);
        await getTodo()
        navigate("/notes");
    };

    const handleUpdate = async () => {
        await updateNote(id, title, description);
        await getTodo()
        setReadOnly(true);

    };

    useEffect(() => {
        console.log("searching ",id)
        const foundNote = data?.find((x) => x._id === id);
        if (foundNote) {
            setNote(foundNote);
            setTitle(foundNote.title);
            setDescription(foundNote.description);
        }
    }, [data,id]);

    if (!note) {
        return (
            <div className="col-span-10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 p-10">
                <p className="text-white font-bold text-xl">Loading...</p>
            </div>
        );
    }

    return (
        <div className="col-span-10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 px-10 h-full  overflow-hidden">
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
                        className="text-gray-400  font-medium  hover:text-blue-700 transition ease-in-out p-3 mx-3 font-roboto rounded-lg"
                        onClick={handleUpdate}
                    >
                        Update <UpgradeIcon fontSize={"small"}/>
                    </button>
                ) : (
                    <button
                        className="text-gray-400  font-medium hover:text-blue-700 transition ease-in-out p-3 mx-3 font-roboto rounded-lg"
                        onClick={() => setReadOnly(false)}
                    >
                        Edit <CreateIcon fontSize={"small"}/>
                    </button>
                )}
                <button
                    className=" text-gray-400 font-medium hover:text-red-500 transition ease-in-out p-3 mx-3 font-roboto rounded-lg"
                    onClick={handleDelete}
                >
                    Delete <DeleteIcon fontSize={"small"}/>
                </button>
            </div>
            <div className={'w-full h-0.5 my-2 rounded-lg bg-zinc-600'}></div>
            <textarea
                className="w-full h-4/6 m-3 p-3 bg-transparent focus:outline-none"
                placeholder="What's on your mind today...."
                readOnly={readOnly}
                value={description}
                onChange={(e) => setDescription(e.target.value)} // Update description state
            ></textarea>
        </div>
    );
};

export default CreatedNote;