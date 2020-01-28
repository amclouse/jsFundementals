/*
    - JS is interpreted line by line (top to bottom), and performs 2 passes of our code. 
        - The first pass of the code recognizes where we have declared variables and stores them away in memory
            - Looks at anything on the left side of our assignment operator (=)
        - The second pass of the code is where the values we ahve given our variables are actually assigned.
    
    - NOTE: functions are also hoisted as well as variables
*/

console.log(name);
let name = 'Adam';

b();

function b() {
    console.log('I have been hoisted');
}