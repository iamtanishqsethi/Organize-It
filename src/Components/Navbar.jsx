import {useNavigate} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import ArchiveIcon from "@mui/icons-material/Archive";
import {useDispatch} from "react-redux";
import {closeMobileMenu} from "../Utils/configSlice";

const Navbar=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch()
    return(
        <div className={'fixed md:hidden z-50 w-screen bg-zinc-950 bottom-0 p-5 flex items-center justify-center space-x-24 rounded-2xl shadow-lg shadow-zinc-500'}>
            <button onClick={()=> {
                navigate("/")
                dispatch(closeMobileMenu())
            }}><HomeIcon fontSize={"large"}/></button>
            <button onClick={()=> {
                navigate("/notes")
                dispatch(closeMobileMenu())
            }}><DescriptionIcon  fontSize={"large"}/></button>
            <button onClick={()=> {
                navigate("/archive")
                dispatch(closeMobileMenu())
            }}><ArchiveIcon fontSize={"large"}/></button>
        </div>
    )
}
export default Navbar;