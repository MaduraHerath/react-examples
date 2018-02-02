// var name = function (firstName, lastName) {
//     if(!firstName){
//         console.log("You must have a first name");
        
//     }
//     if (!lastName) {
//         console.log("You must have a  last name");
//     }
//     return `${firstName},${lastName}`
// }

var name = (firstName,lastName) => {
    if (!firstName) {
        throw new Error('A firstName is required to lordify')
    } 

    if (!lastName) {
        throw new Error('A lord must have a land')
    }   
    return `${firstName} of ${lastName}`
}
console.log(name("Madura","herath"))