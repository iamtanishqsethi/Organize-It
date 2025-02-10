import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import SideBarNote from "./SideBarNote";
import { useGetAllTodo } from "../Utils/useGetAllTodo";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import {Link} from "react-router-dom";
import {closeMobileMenu} from "../Utils/configSlice";

const NotesSideBar = () => {
    const data = useSelector((store) => store.allNotes.notes);
    const getTodo = useGetAllTodo();
    const mobileMenu=useSelector(store=>store.config.isMobileMenuOpen)
    const dispatch = useDispatch();

    useEffect( () => {
         getTodo();
    }, [getTodo]);//this use effect is only triggered when the reference to getTodo changes , ie when the dispatch function is trigger

    if (!data || data?.length === 0) {
        return (
            <div className={`${mobileMenu?"fixed":"hidden"} md:block backdrop-blur-lg col-span-3 h-screen p-5 flex flex-col text-center items-center justify-start w-full z-10   bg-zinc `}>
                <Link to={"/notes"}><button className="m-3 p-2 bg-blue-700 font-bold font-roboto rounded-lg"
                onClick={()=>dispatch(closeMobileMenu())}>
                    Create new note <HistoryEduIcon />
                </button></Link>
                <p>No notes available.</p>
            </div>
        );
    }

    return (
        <div className={`${mobileMenu?"fixed":"hidden"} md:block backdrop-blur-lg col-span-2 h-screen p-5 flex flex-col items-center justify-start w-full z-10   bg-zinc `}>
            <Link to={"/notes"}><button className="m-3 p-3 bg-blue-700 font-bold font-roboto rounded-lg"
                                        onClick={()=>dispatch(closeMobileMenu())}>
                Create new note <HistoryEduIcon />
            </button></Link>
            <div className={'overflow-y-auto h-2/3 w-full '}>
                {data?.map((note) => (
                    <div onClick={()=>dispatch(closeMobileMenu())}>
                        <Link to={"/notes/"+note?._id} key={note._id}><SideBarNote data={note}  /></Link>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default NotesSideBar;
