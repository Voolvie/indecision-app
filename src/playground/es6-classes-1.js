// class Person {
//     constructor(name, age) {
//         this.name = name || 'test name'
//         this.age = age || 0
//     } 
//     getDescription() {
//         return `Hi i am ${this.name} i am ${this.age} years old`
//     }
// }
// class Student extends Person {
//     constructor(name, age, major){
//         super(name,age)
//         this.major = major
//     }
//     hasMajor() {
//         return !!this.major
//     }
//     getDescription() {
//         let description = super.getDescription()

//         if (this.hasMajor()) {
//             description += `Their major is ${this.major}`
//         } 

//         return description
//     }
// }
// const me = new Student('Pep', 23, "Physics")
// console.log(me.getDescription())
// const other = new Student()
// console.log(other.getDescription()) 

class Person {
    constructor(name, surname) {    
    this.name = name || 'Anonymo'
    this.surname = surname || 'HEEHEE'
    }
    getGreeting(){
        return  `Hi i am ${this.name} ${this.surname}`
    }   
}
class Traveller extends Person {
    constructor(name, surname, homeLocation){
        super(name,surname)
        this.homeLocation = homeLocation
    }
    hasHomeLocation(){
        return !!this.homeLocation
    }
    getGreeting(){
        let description = super.getGreeting()
        if (this.hasHomeLocation()){
            description += ` i am from ${this.homeLocation}`
        }
        return description
    }
}

const me = new Traveller('Pep','Guardiola','London')
console.log(me.getGreeting())
const other = new Traveller('Pep','Guardiola')
console.log(other.getGreeting())
