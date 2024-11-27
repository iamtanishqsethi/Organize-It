import SideBar from "./SideBar";
import Header from "./Header";
import Welcome from "./Welcome";
import { Outlet } from 'react-router-dom'
import AllNotes from "./AllNotes";

const Body=()=>{
    return(
        <div className={' w-screen h-screen bg-gradient-to-br from-zinc-950 to-zinc-900 text-white'}>
            <div className={'grid grid-flow-col w-full grid-cols-12 '}>
                <SideBar/>
                <div className={'col-span-10'}>
                    <Header/>
                    <Outlet/>

                </div>

            </div>
        </div>
    )
}
export default Body;