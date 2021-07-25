const isAdult = (x) => {
    if(x >=18 ){
        return true
    } else {
        return false
    }
}
const canDrink = (x) => {
    if(x >=21 ){
        return true
    } else {
        return false
    }
}

export default (x) => {
    if (x > 66){
        return true
    } return false
}

export {isAdult,canDrink}