export const print(message) => log(message, new Date())
export const log(message, timestamp) => console.log(`${timestamp.toString()}: ${message}`)


// export only one var

const free = new Expendition("Mt. Freel", 2, ["water", "snak"])

export default free

