

export const required = (value) => {

    debugger;
    if (value){
        return undefined;
    }
    return "You must write smth...";

}


export const maxLengthTC = (length) => (value) => {
    
    if (value && value.length > length){
        return "Too long...";
    }

    return undefined;
    
    
}