import SettingsIcon from '@mui/icons-material/Settings';
const Header=()=>{
    return(
        <div className={'bg-zinc-950 shadow-lg shadow-zinc-800 w-full fixed  m-0  z-10 py-4 px-8'}>
            <div className={'grid grid-flow-col items-center justify-between'}>
                <div>
                    <h1 className={'text-2xl font-roboto font-bold'}>Welcome</h1>
                </div>
                <div className={'px-4'}>
                    {/*<SettingsIcon/>*/}
                </div>
            </div>

        </div>
    )
}
export default Header;