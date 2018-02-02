function vacation(destination,length) {
    this.destination=destination
    this.length=length
}

vacation.prototype.print = function () {
    console.log(this.destination+ "|"+ this.length)
}

