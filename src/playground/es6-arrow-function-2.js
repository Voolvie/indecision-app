// const add = function (a, b) {
//     console.log(arguments)
//     return a + b
// }
// console.log(add(55, 1, 1001))

const user = {
    name: 'Imie',
    cities: ['Gl', 'Krk', 'Wwa'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
}
console.log(user.printPlacesLived())

const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 4,
    multiply() {

        return this.numbers.map((number) => number + ' multibplied by 4 is ' + (number*this.multiplyBy))
    }
}
console.log(multiplier.multiply())