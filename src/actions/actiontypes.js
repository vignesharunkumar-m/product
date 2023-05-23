export const message = (msg,type) => {
    // console.log("msg,type",msg,type)
    return {
        type:type,
        Data:msg
    }
}