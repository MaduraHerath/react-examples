// old version

function vacation(destination,length) {
    this.destination=destination
    this.length=length
}

vacation.prototype.print = function () {
    console.log(this.destination+ "|"+ this.length)
}

var colombo = new vacation("Colombo","138Km")

console.log(colombo)

// -----------------------------------------------------------------

// new version

class dog {
  constructor(name,age,color){
      this.name=name
      this.age=age
      this.color=color
  }
  print(){
      console.log(`${this.name} + ${this.age} + ${this.color}`)
  }
}

var ruby = new dog("Ruby","3","black&brown")

ruby.print()