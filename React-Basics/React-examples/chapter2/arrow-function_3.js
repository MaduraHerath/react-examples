var tahoe = {
    resorts: ["A","B","C","D","E","F"],
    print: function(delay=2000) {
        setTimeout(() =>{
            console.log(this.resorts.join(","))
        },delay)
    }
}


tahoe.print()

// var tahoe = {
//     resorts: ["Kirkwood", "Squaw", "Alpine", "Heavenly", "Northstar"],
//     print: function (delay = 1000) {
//         setTimeout(() => {
//             console.log(this === window)
//         }, delay)
//     }
// } 
// tahoe.print() // false