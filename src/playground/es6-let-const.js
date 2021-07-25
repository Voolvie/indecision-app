var nameVar = 'name'
var nameVar = 'dd'
console.log('nameVar', nameVar)

let nameLet = 'Jen'
nameLet = 'lele'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst)

// function getPetName() {
//     const petName = 'Juu'
//     return petName
// }

// const petName  = getPetName()
// console.log(petName)

const fullName = 'imie nazwisko 333 3333'
let firstName
if (fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}
console.log(firstName)
