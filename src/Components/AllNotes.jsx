import NotesSideBar from "./NotesSideBar";
import {Outlet} from "react-router-dom";

const AllNotes=()=>{
    return (
        <div className={' pt-16 w-full h-full grid grid-cols-12  '}>

            <NotesSideBar/>
            <Outlet/>
            {/*<NewNote/>*/}
        </div>
    )
}
export default AllNotes;