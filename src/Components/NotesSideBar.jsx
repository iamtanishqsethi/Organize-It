import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import SideBarNote from "./SideBarNote";
import { useGetAllTodo } from "../Utils/useGetAllTodo";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {Link} from "react-router-dom";

const NotesSideBar = () => {
    const data = useSelector((store) => store.allNotes.notes);
    const getTodo = useGetAllTodo();

    useEffect(() => {
        getTodo();
    }, [getTodo]);

    if (!data || data?.length === 0) {
        return (
            <div className="col-span-2 h-full p-5 flex flex-col items-center justify-start sticky top-0">
                <Link to={"/notes"}><button className="m-3 p-3 bg-blue-700 font-bold font-roboto rounded-lg">
                    Create new note <HistoryEduIcon />
                </button></Link>
                {/*<p>No notes available.</p>*/}
            </div>
        );
    }

    return (
        <div className="col-span-2 h-full p-5 flex flex-col items-center justify-start sticky top-0">
            <Link to={"/notes"}><button className="m-3 p-3 bg-blue-700 font-bold font-roboto rounded-lg">
                Create new note <HistoryEduIcon />
            </button></Link>
            <div>
                {data?.map((note) => (
                    <Link to={"/notes/"+note?._id} key={note._id}><SideBarNote data={note}  /></Link>
                ))}
            </div>
        </div>
    );
};

export default NotesSideBar;
