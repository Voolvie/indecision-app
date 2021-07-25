// function square(x) {
//     return x * x
// }

// console.log(square(8))

// const squareArrow = (x) => {
//     return x * x
// }

// console.log(squareArrow(8))
const fullName = 'Imie Nazwisko'

// const getFirstName = () => {
//     const firstName = fullName.split(' ')[0]
//     return firstName
// }

const getFirstName = (fullName) =>  fullName.split(' ')[0]

const imie = getFirstName()

console.log(imie)