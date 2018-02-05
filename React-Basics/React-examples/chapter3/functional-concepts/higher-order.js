const showWelcome = () =>{
    console.log("welcome")
}

const showUnauthorized = () => {
    console.log("Unauthorized")
}

const invokeIf = (condition, fntrue,fnfalse)=>(condition) ? fntrue() : fnfalse()

invokeIf(true,showUnauthorized,showWelcome)
invokeIf(false,showUnauthorized,showWelcome)