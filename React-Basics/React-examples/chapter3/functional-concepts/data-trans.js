const school = ["Yorktown","Dharmaraja","Wakefield"]

console.log(school.join(","))

const wschool = school.filter(school => school[0] =="W")
console.log(wschool)


const cutschool = (cut,list) => list.filter(school => school !== cut)
console.log(cutschool("Dharmaraja",school).join(","))

const highSchools = schools.map(school => `${school} High School`)
console.log(highSchools.join("\n"))
// Yorktown High School
// Washington & Lee High School
// Wakefield High School
console.log(schools.join("\n"))
// Yorktown
// Washington & Lee
// Wakefield

const editName = (oldName, name,arr) =>
arr.map(item => {
    if (item.name === OldName) {
        return {
            ...item,
            name
        }
    }
    else{
        return item
    }
    
})

// const editName = (oldName, name, arr) =>
//     arr.map(item => (item.name === oldName) ?
//         ({ ...item, name }) :
//         item
//     )