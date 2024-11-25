import Header from "./Header";
import SideBar from "./SideBar";
import Welcome from "./Welcome";

const Main=()=>{
    return(
        <div className={' w-screen h-screen bg-gradient-to-br from-zinc-950 to-zinc-900 text-white'}>


            <div className={'grid grid-flow-col w-full grid-cols-12 '}>
                <SideBar/>
                <div className={'col-span-10'}>
                    <Header/>
                    <Welcome/>
                </div>

            </div>

        </div>
    )
}
export default Main;