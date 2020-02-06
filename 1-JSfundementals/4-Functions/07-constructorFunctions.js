
//1        2            3
function Person(name, age, canVote){
//    4     5      6
    this.name = name;
    this.age = age;
    this.canVote = canVote
}
//             7    8
let person4 = new Person('james', 80, true);
let person5 = new Person('Adam', 23, true)
console.log(person4);
console.log(person5);


/*
    1. the function keyword
    2. function name, for constructor functions first letter should be cap'd.
    3. parameters, will end up being the values of all keys in our object
    4. "this" keyword refers to the paramaters in the given (called) function.
    5. the keys of the new object we're creating. 
    6. the argument we pass through our function call will resolve as the values
    7 && 8. the new keyword creates a new instance of our 'Person' function, with the values we pass into that function.
*/