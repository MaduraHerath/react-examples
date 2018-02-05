var madura= {
    name:"madura herath",
    canRead:false,
    carWrite:false
}

// ---------------------normalway(impure function)----------------------------

function selfEducate() {
    madura.canRead=true,
    madura.carWrite=true
    return madura
}


// -------------------this is also impure--------------------------

// const selfEducate = (person) => {
//     person.canRead=true,
//     person.carWrite=true
//     return person
// }

console.log(selfEducate(frederick))
console.log(frederick)
// {name: "Frederick Douglass", canRead: true, canWrite: true}
// {name: "Frederick Douglass", canRead: true, canWrite: true}

// ------------------------pure function-------------------------
const selfEducate = (person) =>({
    ...person,
    canRead:true,
    canWrite:true
})