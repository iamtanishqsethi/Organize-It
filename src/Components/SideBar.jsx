import MenuIcon from "@mui/icons-material/Menu";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import ArchiveIcon from '@mui/icons-material/Archive';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {closeMenu, toggleMenu} from "../Utils/configSlice";
const SideBar=()=>{
    const navigate=useNavigate();

    const isMenuOpen=useSelector(store=>store.config.isMenuOpen)

    const dispatch = useDispatch();
    const handleClick=()=>{
        dispatch(toggleMenu())
    }
    return(
        <div className={`${isMenuOpen?'col-span-2':'col-span-1'} bg-zinc-950 h-screen hidden md:block sticky z-10  p-5`}>
            <div className={'flex items-center justify-between '}>
                <h1 className={'text-2xl font-extrabold font-roboto cursor-pointer'}
                    onClick={()=>navigate("/")}><span className={`${isMenuOpen?"inline":"hidden"}`}>Organize It </span><span
                    className={'text-blue-700'}><HistoryEduIcon fontSize={`${isMenuOpen?"medium":"large"}`}/></span></h1>
                <div onClick={handleClick} className={'cursor-pointer p-2 rounded-full hover:bg-zinc-800 transition ease-in-out'}>
                    <MenuIcon />
                </div>


            </div>
            <div className={'py-9'}>
                <ul>
                    <li className={'mx-1.5 my-3 p-3 rounded-lg transition ease-in-out hover:bg-zinc-800 font-lg font-medium font-roboto cursor-pointer'}
                    onClick={()=>navigate("/")}
                    ><span className={'px-1'}><HomeIcon fontSize={`${isMenuOpen?"medium":"large"}`}/></span ><span className={`${isMenuOpen?"inline":"hidden"}`}>Home</span></li>
                    <li className={'mx-1.5 my-3 p-3 rounded-lg transition ease-in-out hover:bg-zinc-800 font-lg font-medium font-roboto cursor-pointer'}
                    onClick={()=> {
                        navigate("/notes")
                        dispatch(closeMenu())
                    }}
                    ><span className={'px-1'}><DescriptionIcon  fontSize={`${isMenuOpen?"medium":"large"}`}/></span>
                        <span className={`${isMenuOpen?"inline":"hidden"}`}>All Notes</span>
                    </li>
                    <li className={'mx-1.5 my-3 p-3  rounded-lg transition ease-in-out hover:bg-zinc-800 font-lg font-medium font-roboto cursor-pointer'}
                        onClick={()=> {
                            navigate("/archive")
                            dispatch(closeMenu())
                        }}
                    ><span className={'px-1'}><ArchiveIcon fontSize={`${isMenuOpen?"medium":"large"}`}/></span><span className={`${isMenuOpen?"inline":"hidden"}`}>Archived</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default SideBar;