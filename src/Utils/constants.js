export const formatDate=(date)=>{
    const array=date.substring(0,10).split("-")
    array.reverse()
    return array.join(".")

}
export const modulesCode={
    toolbar:[
        [
            {
                header:[1,2,3,4,5,6,false],
            }
        ],
        ["bold","italic","underline","strike","blockquote"],
        [
            {
                font:[]
            }
        ],
        [
            {
                size:[]
            }
        ],

        [
            {list:"ordered"},
            {list:"bullet"},
            {indent:-1},
            {indent:+1},
        ],
        ["link","image","video"]
    ]
}