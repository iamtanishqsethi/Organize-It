const Note=()=>{
    return (
        <div className={'col-span-10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 p-10'}>

            <input type="text" placeholder={'New Note'} className={'block w-3/4 m-3 p-3 bg-transparent font-extrabold text-4xl font-roboto focus:outline-none'}/>
            <textarea className={'w-full h-5/6 m-3 p-3 bg-transparent focus:outline-none'} placeholder={'Whats on your mind today....'}></textarea>

        </div>
    );
}
export default Note;