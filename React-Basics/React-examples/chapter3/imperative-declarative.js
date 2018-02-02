// ------------------------------------imperative approch-----------------------------

// var string = "this is the string that i want to convert"
// var urlfriendly =""

// for (let i = 0; i < string.length; i++) {
//     if (string[i]===" ") {
//         urlfriendly +="-"
//     }
//     else{
//         urlfriendly += string[i]
//     }

// }

// console.log(urlfriendly)

// ------------------------------------declarative approch-----------------------------

const string = "this is the second text"
const urlfriendly = string.replace(/ /g,"-")

console.log(urlfriendly)