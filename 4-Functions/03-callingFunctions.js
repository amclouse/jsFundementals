function hi() {
    console.log('hello');
}

// hi;
//hi();
//console.log(hi);
console.log(hi())

// as soon asour parser sees that there is a function invocation, that happens immediately.

/* CHALLENGE

    - CREATE a function that, when invoked, lists the numbers 1-10
*/

function numbers() {
    for( let i = 1; i < 11; i++) {
        console.log(i)
    }
}

let arr = ["this", "is", "really", "cool"];

function arrlist() {
    for (let word of arr) {
        console.log(word);
    }
}

arrlist();