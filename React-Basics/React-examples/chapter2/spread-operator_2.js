var morning = {
    breakfast : "string hoppers",
    lunch : "rice and curry"
}
var dinner = "koththu"

var bagpackfood = {
    ...morning,
    dinner
}

console.log(bagpackfood)