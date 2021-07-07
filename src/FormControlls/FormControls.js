export const Recuerd = (value) => {
    if (value) return undefined;
    return 'Fieldis Recuerd'
}
export const MaxlightCreator = (maxLenght) => (value) => {
    if (value.length > maxLenght) return `max light is ${maxLenght} sumbol`;
    return undefined
}