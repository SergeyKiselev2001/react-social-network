

export const required = (value) => {


    if (value){
        return undefined;
    }
    return "You must write smth...";

}


export const loginValidator = (value) => {
    

    console.log('DA', !isNaN(value.split()[0]))

    if (value && !isNaN(value.split()[0])){
        return 'First symbol must be not a number...'
    }

    return undefined;
}


export const maxLengthTC = (length) => (value) => {
    
    if (value && value.length > length){
        return "Too long...";
    }
    return undefined;
    
}