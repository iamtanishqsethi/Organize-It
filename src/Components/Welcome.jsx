import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import {Link} from "react-router-dom";
const Welcome=()=>{
    return(
        <div className={'flex items-center justify-center md:bg-zinc-900 py-36  mt-36 md:mt-24 ml-[18%]  px-2 md:px-0 md:mx-24 md:border-2 border-gray-500 rounded-3xl'}>
            <div className={'flex flex-col items-center justify-center'}>
                <h1 className={'text-xl md:text-3xl font-roboto font-bold text-zinc-200'}>Welcome to </h1>
                <span className={'text-4xl md:text-7xl font-roboto font-extrabold  m-2 text-center'}>Organize It <span className={'text-blue-700'}><HistoryEduIcon fontSize={'image'} /></span></span>
                <h1 className={'text-lg md:text-xl font-roboto font-bold text-zinc-400'}>A minimal  note taking App </h1>
                <Link to={"/notes"}><button className={'m-2 md:m-4 p-2 md:p-4 bg-blue-700 md:font-bold font-roboto rounded-lg'}>
                    Create new note <HistoryEduIcon/></button></Link>
            </div>
        </div>
    )
}
export default Welcome;