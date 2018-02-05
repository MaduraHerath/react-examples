const countdown = (value,fn) => {
    fn(value)
    return (value>0) ? countdown(value - 1,fn) : value
}

countdown(10,value => console.log(value))


const countdownClock = (value,fn ,delay=1000) =>
{
    fn(value)
    return fn(value>0) ? 
    setTimeout(() => countdownClock(value-1, fn),
     delay) : value
}

countdownClock(13,value=>console.log(value))