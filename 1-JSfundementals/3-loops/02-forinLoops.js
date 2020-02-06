/* 
    - great for count/value pairs in an object. Properties in an object are what is called enumerable. 
        - for in loops will iterate over an objects emumerable properties.
*/

let student = {
    name: "Peter",
    awesome: true,
    degree: "Javascript",
    week: 1,
}

console.log(student.degree); //dot notation

for (let item in student) {
    //console.log(item);
    console.log(student[item]) //object bracket notation
}

let dogArray = ["great dane", "husky", "border collie", "dalmation", "pug"];

for (let dog in dogArray) {
    //console.log(dog);
    console.log(dogArray[dog])
}

//object is dot notation, value is bracket notation


/* 
    = write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name
*/



let name = "adam";
let capName;

for (let i in name) {
    if(i ==0) {
        name[i] = name[i].toUpperase();
    } else {
        name[i] = name[i].toLowercase();
    }
}

console.log(capName)



