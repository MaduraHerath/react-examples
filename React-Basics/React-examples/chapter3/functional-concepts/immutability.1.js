// ----------------------------mutability----------------------------

// var addcolor= function(title,color) {
//     color.push({title:title})
//     return color
// }

var list = ["red","blue"]
// console.log(addcolor("green",list).length)
// console.log(list.length)

// ......................................immutability..........................

// const addColor = (title, array) => array.concat({ title})
// console.log(addColor("green",list).length)
// console.log(list.length)


// .............................................ES6 Spread.......................................
const addcolor = (title, list) => [...list,title]
console.log(addcolor("green",list).length)
console.log(list.length)