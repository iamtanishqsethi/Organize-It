export const formatDate=(date)=>{
    const array=date.substring(0,10).split("-")
    array.reverse()
    return array.join(".")

}