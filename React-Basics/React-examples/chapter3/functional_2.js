const insidefn = logger =>
logger("This is inside function arguments");

insidefn(message=>console.log(message))

// They can be sent to other functions as arguments