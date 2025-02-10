import NotesSideBar from "./NotesSideBar";
import {Outlet} from "react-router-dom";

const AllNotes=()=>{
    return (
        <div className={' pt-16 w-screen md:w-full h-screen md:overflow-y-hidden grid grid-cols-12  '}>

            <NotesSideBar/>
            <Outlet/>
        </div>
    )
}
export default AllNotes;