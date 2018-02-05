// transform array into object

const schools ={
    "Yorktown": 10,
    "Washington & Lee": 2,
    "Wakefield": 5
}

const schoolsArray = Object.keys(schools).map(key => ({
    name:key,
    wins:schools[key]
}))

console.log(schoolsArray)

// arrays into values

const ages = [21,56,51,3,35,65,1,2,3,51,45,2,16,5]

// const maxAge = ages.reduce((max,age)=>{
//     console.log(`${age} > ${max} = ${age > max}`);
//     if (age>max) {
//         return age
//     }
//     else{
//         return max
//     }
// },0)

// console.log(maxAge)

const maxAge = ages.reduce((max,age)=>(age > max)?  age : max ,0)

console.log(maxAge)


// array into object

const colors = [
    {
        id: '-xekare',
        title: "rad red",
        rating: 3
    },
    {
        id: '-jbwsof',
        title: "big blue",
        rating: 2
    },
    {
        id: '-prigbj',
        title: "grizzly grey",
        rating: 5
    },
    {
        id: '-ryhbhsl',
        title: "banana",
        rating: 1
    }
]

const hashColors = colors.reduce((hash, { id, title,rating})=>{
    hash[id] = { title,rating}
    return hash
},
{})

console.log(hashColors);


