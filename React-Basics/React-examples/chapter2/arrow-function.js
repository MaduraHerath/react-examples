// Old
var lordify = function (firstName, land) {
    return `${firstName} of ${land}`
} 
  
// / New
var lordify = (firstName, land) => `${firstName} of ${land}`
console.log(lordify("Dale", "Maryland")) // Dale of Maryland
console.log(lordify("Daryle", "Culpeper")) // Daryle of Culpeper