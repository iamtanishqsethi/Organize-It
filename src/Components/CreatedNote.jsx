import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDeleteNote } from "../Utils/useDeleteNote";
import { useUpdateNote } from "../Utils/useUpdateNote";

const CreatedNote = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const data = useSelector((store) => store.allNotes?.notes);
    const [note, setNote] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [readOnly, setReadOnly] = useState(true);

    const updateNote = useUpdateNote();
    const deleteNote = useDeleteNote(id);

    const handleDelete = () => {
        deleteNote(id);
        navigate("/notes");
    };

    const handleUpdate = () => {
        updateNote(id, title, description);
        setReadOnly(true);
    };

    // Load the note once when the component mounts or the `id` changes
    useEffect(() => {
        const foundNote = data?.find((x) => x._id === id);
        if (foundNote) {
            setNote(foundNote);
            setTitle(foundNote.title); // Initialize title state
            setDescription(foundNote.description); // Initialize description state
        }
    }, [id, data]);

    if (!note) {
        return (
            <div className="col-span-10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 p-10">
                <p className="text-white font-bold text-xl">Loading...</p>
            </div>
        );
    }

    return (
        <div className="col-span-10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 p-10">
            <input
                type="text"
                placeholder="Created Note"
                className="block w-3/4 m-3 p-3 bg-transparent font-extrabold text-4xl font-roboto focus:outline-none"
                readOnly={readOnly}
                value={title}
                onChange={(e) => setTitle(e.target.value)} // Update title state
            />
            {!readOnly ? (
                <button
                    className="bg-green-700 p-3 m-3 font-roboto"
                    onClick={handleUpdate}
                >
                    Update
                </button>
            ) : (
                <button
                    className="bg-blue-700 p-3 m-3 font-roboto"
                    onClick={() => setReadOnly(false)}
                >
                    Edit
                </button>
            )}
            <button
                className="bg-red-700 p-3 m-3 font-roboto"
                onClick={handleDelete}
            >
                Delete
            </button>
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
