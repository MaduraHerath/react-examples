var log = function (message) {
    console.log(message)
}

log("this is the message that i want to show you")

var show = message => console.log(`${message}`)

show("this is show message")


const obj = {
    message : "This is the Object message",
    log(message){
        console.log(message)
    }
}

obj.log(obj.message)
