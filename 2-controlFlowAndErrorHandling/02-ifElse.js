let weather = 30;

if (weather < 50) {
    console.log("Wear a jacket!")
} else {
    console.log("No jacket needed")
}

let name = "Adam";

if (name == "Adam") {
    console.log('Hello my name is ${name}.')
    
} else {
    console.log("Hello, what is your name?")
    console.log('Hello, is your name ${')
}

let name = "Donovan";

if (name == "Adam") {
    console.log
    
} else {
    
}

/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';

    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'

    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase

    Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

// BRONZE
let name = 'zAchARy';
// console.log(name[0]);
// console.log(name.charAt(0));

if (name[0] == name[0].toUpperCase()) {
    console.log(name);
} else {
    console.log('hey, the string isnt written correctly')
}

// SILVER
let name = 'zAchARy';

if (name[0] == name[0].toUpperCase()) {
    console.log(name[0]);
} else {
    console.log(name.slice(1).toLowerCase());
}

// GOLD
let name = 'zAchARy';

if (name[0] == name[0].toUpperCase()) {
    let isUppercase = name[0] + name.slice(1).toLowerCase();
    console.log('console log #1:', isUppercase);
} else {
    let notUppercase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log('console log #2:', notUppercase);
}
let age = 18

if (age >= 25) {
    console.log("you can rent a car")
    
} else if (age >= 21){
    console.log("you can drink!")
    
} else if (age >= 18) {
    console.log("You can vote!")
} else {
    console.log("blahblah")
}