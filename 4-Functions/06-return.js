let name = fname => {
    return 'Adam';
}

let myNameIs = name();
console.log(myNameIs);


/*
CHALLENGE
***********
    Make a tip calculator using a function
    have it return the value
    capture that returned value in a VARIABLE
    print that variable
*/


/*function tipCalculator(bill) {
    let tip = bill * 0.2;
    return tip;
}

let totalTip = tipCalculator(19.84);
console.log(totalTip)*/

let tipCalculator = bill => bill * 0.2;
let totalTip = tipCalculator(27);

console.log(totalTip)