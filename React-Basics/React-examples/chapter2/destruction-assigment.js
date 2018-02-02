var sandwitch = {
    bread: "dutch crunch",
    meat: "chicken",
    cheese: "swiss",
    topping:["lettues","tomato","mustard"]
}

var {bread, meat} = sandwitch
console.log(bread,meat)

// The code pulls bread and meat out of the object and creates local variables for them.Also, the
// bread and meat variables can be changed:

bread="garlic"
meat="pork"

console.log(bread,meat)
console.log(sandwitch.bread,sandwitch.meat)