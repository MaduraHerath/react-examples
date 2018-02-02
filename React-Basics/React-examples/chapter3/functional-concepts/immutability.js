var color_lawn ={
    titile: "lawn",
    color: "red",
    rating:"1"
 }
// -------------------------------------this will change the color of real object--------------------------------

// function rateColor(color,rating) {
//     color.rating=rating
//     return color
// }


// --------------------------------------this will not----------------------------------------------

// var rateColor = function (color,rating) {
//     return Object.assign({},color,{rating:rating})
// }

// ------------------------------------------new way to do that----------------------------------------


const rateColor = (color,rating)=> ({
    ...color,
    rating
})
console.log(rateColor(color_lawn,5).rating)
console.log(color_lawn.rating)