

export const required = (value) => {

    debugger;
    if (value){
        return undefined;
    }
    return "error msg...";

}


export const maxLengthTC = (length) => (value) => {
    
    if (value && value.length > length){
        return "too long...";
    }

    return undefined;
    
    
}