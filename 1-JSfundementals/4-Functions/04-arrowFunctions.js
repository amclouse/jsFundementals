let hi = () => {
    console.log('hello');
}

/*
    - all fat arrow functions need to be set to a variable
    - fat arrow is signifying that this is actually a function
    - arrow functions are the shorthand way of writing a function expression, not declaration.
        - arrow functions do not get hoisted since they are function expressions.
*/

//CONCISE BODY
let hi = () => console.log('hello'); //return is implicit and happs by default
hi();

//BLOCK BODY
let hi = () => {
    console.log('hello');
    //return keyword must be present inside of a block body arrow function
}
hi();

//CONCISE VS BLOCK

let apples = num => console.log(`there are ${num} apples`);
apples(700)

let counting = num => {
    for(let i = 0; i <= num; i++){
        console.log(i);
    }
}
counting(20);

/*
    - if there are no parameters, we have to have the parens ()
    - if there is a single parameter, optional.
    - more than one, need parens.
*/


let counting = () => {
    for (let i = 0; i < 11; i = i + 1){
       console.log(i)
    }
        (i % 2 === 0) ? console.log('this number is odd') : console.log('this number is even')
    
    }
console.log(counting())