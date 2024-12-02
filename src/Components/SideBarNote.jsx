import {formatDate} from "../Utils/constants";

const SideBarNote=({data})=>{
    let {title,updatedAt}=data;
    // updatedAt=updatedAt.substring(0,10)
    updatedAt=formatDate(updatedAt)
    return(
        <div className={'m-2 p-3 w-[190px] bg-zinc-700 bg-opacity-50 font-roboto rounded-lg'}>
            <h1 className={'text-xl font-bold'}>{title}</h1>
            <div className={'flex items-center justify-between'}>
                <h2 className={'text-sm text-gray-400'}>{updatedAt}</h2>
            </div>
        </div>
    )
}
export default SideBarNote