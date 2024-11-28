import SideBar from "./SideBar";
import NotesSideBar from "./NotesSideBar";
import NewNote from "./NewNote";

const AllNotes=()=>{
    return (
        <div className={' pt-16 w-full h-full grid grid-cols-12  '}>

            <NotesSideBar/>
            <NewNote/>
        </div>
    )
}
export default AllNotes;