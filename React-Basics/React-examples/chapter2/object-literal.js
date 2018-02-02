var name = "Madura"
var age = 25



var print =function() {
    console.log(`Name: ${this.name},Age: ${this.age}`)
}

var person = { name, age, print }

person.print()