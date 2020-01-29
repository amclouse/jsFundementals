/*
    - a ternary is a shortcut, or shorthand way of writing an if/else statement
    - cannot do a basic if statement because we need to catch all (the else)
*/

let num = 6;

//Ternary
(num > 0) ? console.log('yes') : console.log('no');

//if/else
if (num > 0) {
    console.log('yes')
    
} else {
    console.log('no');
}

//let num = 6;

//Ternary
//(num == 0) ? console.log("working") : (num < 0) ? console.log("not working") : console.log("still not working")

//if/Else

let age = 30

(age >=  25) ? console.log("You can rent a car") : (age >= 21) ? console.log("You can drink!") : (age >= 18) ? console.log("You can vote!") : console.log("You can't do anything fun.")

