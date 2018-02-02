var createScream = function (logger) {
    return function (message) {
        logger(message.toUpperCase() + "!!!")
    }
    
}

var scream = createScream(message => console.log(message))


scream("hello wifi")
scream("danger")