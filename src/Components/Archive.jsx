import ArchiveSideBar from "./ArchiveSideBar";
import {Outlet} from "react-router-dom";

const Archive=()=>{
    return (
        <div className={' pt-16 w-screen md:w-full h-screen overflow-y-hidden grid grid-cols-12  '}>
            <ArchiveSideBar/>
            <Outlet/>
        </div>
    )
}
export default Archive;