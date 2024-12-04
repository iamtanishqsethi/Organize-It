import { useLocation, matchPath } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
    const location = useLocation();
    const path = location.pathname;
    const [headerPath, setHeaderPath] = useState("Welcome");
    // console.log(path)

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

    return (
        <div className={'bg-zinc-950 w-full fixed m-0 z-10 py-4 px-8'}>
            <div className={'grid grid-flow-col items-center justify-between'}>
                <div>
                    <h1 className={'text-2xl font-roboto font-bold'}>{headerPath}</h1>
                </div>
                <div className={'px-4'}>
                </div>
            </div>
        </div>
    );
};

export default Header;
