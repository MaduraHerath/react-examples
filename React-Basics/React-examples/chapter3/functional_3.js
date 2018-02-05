var createScream = function (logger) {
    return function (message) {
        logger(message.toUpperCase() + "!!!")
    }
    
}

var scream = createScream(message => console.log(message))


scream("hello wifi")
scream("danger")

// FUNCTIONS CAN BE RETURNED FROM OTHER FUNCTIONS!!!
// CREATESCREAM RETURNS A FUNCTION!!!
// SCREAM INVOKES THAT RETURNED FUNCTION!!!

// const createScream = logger => message =>
//     logger(message.toUpperCase() + "!!!")