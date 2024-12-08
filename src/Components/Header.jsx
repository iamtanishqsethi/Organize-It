import { useLocation, matchPath } from "react-router-dom";
import { useEffect, useState } from "react";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import {useDispatch} from "react-redux";
import {toggleMobileMenu} from "../Utils/configSlice";

const Header = () => {
    const location = useLocation();
    const path = location.pathname;
    const [headerPath, setHeaderPath] = useState("Welcome");
    // console.log(path)
    const dispatch=useDispatch()
    useEffect(() => {
        if (path === "/notes" || matchPath("/notes/:id",path)) {//dynamic path matching for router :id elements
            setHeaderPath("All Notes");
        } else if (path === "/archive" || matchPath("/archive/:id",path)) {
            setHeaderPath("Archive Notes");
        } else {
            setHeaderPath("Welcome");
        }
    }, [path]);

    // console.log(headerPath);
    const handleClick=()=>{
        if(headerPath==="All Notes"|| headerPath==="Archive Notes"){
            // console.log("click")
            dispatch(toggleMobileMenu())
        }
    }

    return (
        <div className={'bg-zinc-950 min-w-full fixed m-0 z-10 py-4 px-8'}>
            <div className={'grid grid-flow-col items-center justify-between'}>
                <div className={"block md:hidden"}
                    onClick={handleClick}
                >

                    <span
                        className={'text-blue-700 text-2xl'}><HistoryEduIcon
                        fontSize={ "large"}/></span>
                </div>
                <div>
                    <h1 className={'text-xl md:text-2xl font-roboto font-bold'}>{headerPath}</h1>
                </div>

            </div>
        </div>
    );
};

export default Header;
