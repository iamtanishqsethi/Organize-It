import SideBar from "./SideBar";
import Header from "./Header";
import { Outlet } from 'react-router-dom'
import {useSelector} from "react-redux";
import Navbar from "./Navbar";

const Body=()=>{
    const isMenuOpen=useSelector(store=>store.config.isMenuOpen)
    return(
        <div className={' w-screen h-screen bg-gradient-to-br from-zinc-950 to-zinc-900 text-white'}>
            <div className={'grid grid-flow-col w-full grid-cols-12 overflow-x-hidden'}>
                <SideBar />
                <Navbar/>
                <div className={`${isMenuOpen?'col-span-10':'col-span-11'}`}>
                    <Header/>
                    <Outlet/>
                </div>

            </div>
        </div>
    )
}
export default Body;