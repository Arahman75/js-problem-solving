// 1 n task
// 1 vori = 16 ana

function anaToVori (ana){
    const vori = ana / 16;
    return vori;
}
const result = anaToVori(240);
console.log(result);

// 2.number problem

let singraPrice = 10;
let rullPrice = 20;
let jilafiPrice = 15;

function pandaCost  (price1, price2, price3){
    const perSingraPrice = price1 * singraPrice;
    const perRullPrice = price2 * rullPrice;
    const perjilapiPrice = price3 * jilafiPrice;
    const totalPrice = perSingraPrice + perRullPrice + perjilapiPrice;

return totalPrice;
}

const result1 = pandaCost(20, 5, 3);
console.log(result1)


// 3.number task
let firstPerson = 5000;
let secondPerson = 4000;
let thirdPerson = 3000;

function picnicBudget (person) {
    if(person <= 100){
        const taka = person * firstPerson;
        return taka;
    }
    else if(person  <=200){
const first10Person = 100 * firstPerson;
const restPerson = person - 100;
const second10Person = restPerson * secondPerson;
const totalPerson = first10Person + second10Person;
return totalPerson;
    }
    else{
        const first10Person = 100 * firstPerson;
        const second10Animal = 200 * secondPerson;
        const restPerson = person - 200;
        const otherPerson = restPerson * thirdPerson;
        const totalPerson = first10Person + second10Animal + otherPerson;
        return totalPerson;

    }
    
}
const result2 = picnicBudget(201);
console.log(result2);

// 4.number task
const friends = ['parbez', 'emon', 'sagor', 'rahman', 'sabina', 'sarika'];

function oddFriend (name){
 let oddest = name[0];
 for (let i = 0; i > name.length; i++) {
    const nameLetter = name[i];
    if(nameLetter.length > oddest.length){
        oddest = nameLetter;
    }
    
 }
 return oddest;
}
const oddName = oddFriend(friends);
console.log(oddName);


// optionale code
// function tinnyFriend(name) {
//     var smallest = name[1];
//     for(var i = 0; i < name.length; i++){
//         var nameLetter = name[i];
//         if(nameLetter.length < smallest.length){
//             smallest = nameLetter;
//         }
//     }
//     return smallest;
// }
// var tinnyName = tinnyFriend(['parvez','jahed','paru','mohiuddin','rahman','polash','tutul']);
// console.log(tinnyName); 

// const firstMiles = 10;
// const secondMiles = 20;
// const thirdMiles = 30;

// function animalCount (miles){
//     if(miles <=10){
//         const count = miles * firstMiles;
// return count
//     }
//     else if(miles <=20){
// const first10Animal = 10 * firstMiles;
// const restMilse = miles - 10;
// const second10Animal =  restMilse * secondMiles;
// const totalAnimal = first10Animal + second10Animal;
// return totalAnimal;
// }
// else{
//     const first10Animal = 10 * firstMiles;
//     const second10Animal = 10 * secondMiles;
//     const restMilse = miles - 20;
//     const third10Animal = restMilse * thirdMiles;
//     const totalAnimal = first10Animal + second10Animal + third10Animal;
// return totalAnimal;
// }
// }
// const totalAnimal = animalCount(21);
// console.log(totalAnimal);
