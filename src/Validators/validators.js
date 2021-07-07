export const required = value => {
    if (value) return undefined;
    return "Field is required";
}
export const maxlengthCreator =(maxlength) => (value) => {
    if (value.length > maxlength) return `Max length is ${maxlength} sybols!`;
    return undefined;
}