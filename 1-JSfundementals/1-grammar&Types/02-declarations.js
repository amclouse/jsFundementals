/*
    - a variable is a named container for storing things.
    - we name our variables so we can call refer to them again.
*/
let a = 2;

    let  b    =   1;
/*  (1)  (2) (3) (4)
    1. javascript keyword
    2. variable name
    3. assignment operator
    4. value of variable
*/
console.log(a + b);


/*
    - a variable name must begin with a letter, underscore, or dollar sign
    - numbers may follow the above characters, but they cannot come first.
    - JS is case sensitive = eg. "hello" and "Hello" are two separate variable
    - no spaces allowed in variable names
    - camelCase eg. firstWordVariableName
        - this helps readibility
*/


/*
    - var, let, const:
       - var: 'old' keyword for variables in JS

       - let: 'new' keyword for variables in JS

       - const: unchangeable variable once declared

*/

/*

    - declaration vs initialization:
        - declarations are the LEFT SIDE of a variable
            - let x
            - declarations are on the left side of the assignment operator (=)

    - initializations are the RIGHT SIDE of the variable
        - it sets the value of the variable
        - the value we initialize we initialize our variables as is what is on the right side of the assignment operator (=)
        - 

*/

let x;
console.log('Declaration', x); // declaration: undefined

x = 10;
console.log('Initialization', x); // initialization: 10

x = 100;
console.log(' Reinitialize', x); // reassigning a value

let y = 'hello';
console.log(x, y)

const today = 'Great';
console.log(today);

