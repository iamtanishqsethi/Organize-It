import {useSelector} from "react-redux";
import {useGetAllTodo} from "../Utils/useGetAllTodo";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import SideBarNote from "./SideBarNote";

const ArchiveSideBar=()=>{
    const data = useSelector((store) => store.allNotes.notes);
    const getTodo = useGetAllTodo();
    // console.log(data)
    const filteredNotes=(data?.filter(note=>note?.isComplete===true))
    useEffect( () => {
        getTodo();
    }, [getTodo]);//this use effect is only triggered when the reference to getTodo changes , ie when the dispatch function is trigger

    if (!filteredNotes || filteredNotes?.length === 0) {
        return (
            <div className="col-span-2 h-screen p-5 flex flex-col items-center justify-start sticky top-0">
                <Link to={"/notes"}><button className="m-3 p-2 bg-blue-700 font-bold font-roboto rounded-lg">
                    Create new note <HistoryEduIcon />
                </button></Link>
                <p>No notes available.</p>
            </div>
        );
    }

    return (
        <div className="col-span-2 h-screen p-5 flex flex-col items-center justify-start sticky  bg-zinc ">
            <Link to={"/notes"}><button className="m-3 p-3 bg-blue-700 font-bold font-roboto rounded-lg">
                Create new note <HistoryEduIcon />
            </button></Link>
            <div className={'overflow-y-auto h-2/3'}>
                {filteredNotes?.map((note) => (
                    <Link to={"/archive/"+note?._id} key={note._id}><SideBarNote data={note}  /></Link>
                ))}
            </div>
        </div>
    );
}
export default ArchiveSideBar;