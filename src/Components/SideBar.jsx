import MenuIcon from "@mui/icons-material/Menu";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import ArchiveIcon from '@mui/icons-material/Archive';
const SideBar=()=>{
    return(
        <div className={'col-span-2 bg-zinc-950 h-screen sticky p-5'}>
            <div className={'flex items-center justify-between '}>
                <h1 className={'text-2xl font-extrabold font-roboto '}>Organize It <span
                    className={'text-blue-700'}><HistoryEduIcon fontSize={'medium'}/></span></h1>
                <MenuIcon/>

            </div>
            <div className={'py-9'}>
                <ul>
                    <li className={'mx-1.5 my-3 p-3 rounded-lg bg-zinc-800 font-lg font-medium font-roboto '}><span className={'px-2'}><HomeIcon/></span>Home</li>
                    <li className={'mx-1.5 my-3 p-3 rounded-lg bg-zinc-800 font-lg font-medium font-roboto '}><span className={'px-2'}><DescriptionIcon/></span>All
                        Notes
                    </li>
                    <li className={'mx-1.5 my-3 p-3  rounded-lg bg-zinc-800 font-lg font-medium font-roboto '}><span className={'px-2'}><ArchiveIcon/></span>Archived
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default SideBar;