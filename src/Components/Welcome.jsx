import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import {Link} from "react-router-dom";
const Welcome=()=>{
    return(
        <div className={'flex items-center justify-center bg-zinc-900 py-36 mt-36 mx-24 border-2 border-gray-500 rounded-3xl'}>
            <div className={'flex flex-col items-center justify-center'}>
                <h1 className={'text-3xl font-roboto font-bold text-zinc-200'}>Welcome to </h1>
                <span className={'text-7xl font-roboto font-extrabold  m-2'}>Organize It <span className={'text-blue-700'}><HistoryEduIcon fontSize={'image'} /></span></span>
                <h1 className={'text-xl font-roboto font-bold text-zinc-400'}>A minimal  note taking App </h1>
                <Link to={"/notes"}><button className={'m-4 p-4 bg-blue-700 font-bold font-roboto rounded-lg'}>
                    Create new note <HistoryEduIcon/></button></Link>
            </div>
        </div>
    )
}
export default Welcome;