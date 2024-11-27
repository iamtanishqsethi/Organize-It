import SideBar from "./SideBar";
import NotesSideBar from "./NotesSideBar";
import Note from "./Note";

const AllNotes=()=>{
    return (
        <div className={' pt-16 w-full h-full grid grid-cols-12  '}>

            <NotesSideBar/>
            <Note/>
        </div>
    )
}
export default AllNotes;