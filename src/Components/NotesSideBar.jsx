import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import SideBarNote from "./SideBarNote";
import {useGetAllTodo} from "../Utils/useGetAllTodo";
import {useSelector} from "react-redux";

const NotesSideBar = () => {
    useGetAllTodo()
    const notes=useSelector(store=>store.allNotes.notes)
    console.log(notes)
    if(notes.length===0){
        return null
    }
    return(
        <div className={'col-span-2 h-full  p-5 flex flex-col items-center justify-start sticky top-0'}>
            <button className={'m-3 p-3 bg-blue-700 font-bold font-roboto rounded-lg'}>
                Create new note <HistoryEduIcon/></button>
           <div>
               {
                   notes.map((note)=><SideBarNote data={note} key={note._id}/>)
               }
           </div>
        </div>
    )
}
export default NotesSideBar;