var one = ["one","two"]
var two = ["three","four"]
var three = [...one,...two]
console.log(three)

console.log(three.join(","))


var peaks = ["Tallac", "Ralston", "Rose"]
var [last] = peaks.reverse()
console.log(last) // Rose
console.log(peaks.join(', ')) // Rose, Ralston, Tallac


// var peaks = ["Tallac", "Ralston", "Rose"]
// var [last] = [...peaks].reverse()
// console.log(last) // Rose
// console.log(peaks.join(', ')) // Tallac, Ralston, Rose


function directions(...args) {
    var [start, ...remaining] = args
    var [finish, ...stops] = remaining.reverse()
    console.log(`drive through ${args.length} towns`)
    console.log(`start in ${start}`)
    console.log(`the destination is ${finish}`)
    console.log(`stopping ${stops.length} times in between`)
} 
directions(
    "Truckee",
    "Tahoe City",
    "Sunnyside",
    "Homewood",
    "Tahoma"
)