import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import SideBarNote from "./SideBarNote";

const NotesSideBar = () => {
    return(
        <div className={'col-span-2 h-full  p-5 flex flex-col items-center justify-start sticky top-0'}>
            <button className={'m-3 p-3 bg-blue-700 font-bold font-roboto rounded-lg'}>
                Create new note <HistoryEduIcon/></button>
            <div className={' '}>
                <SideBarNote/>
                <SideBarNote/>

            </div>
        </div>
    )
}
export default NotesSideBar;