/*
    - DOM stands for document object model, and it is what allows our javascript to interact with our HTML and CSS.
    - the DOM specifies how browsers should create a model of an HTML page and how javascript can access and update the contents of that web page while it's in the browser window.
        - DOM is an object-oriented representation of a web page, which can be modified with a scripting language like javascript
        - the DOM does two primary things:

        1. Makes a model of an HTML page
        2. Access and manipulate the HTML page

        ACCESSING:
            COMMON METHODS FOR ACCESSING A SINGLE ELEMENT:
                - getElementById()
                - querySelector('h1')

            COMMON METHODS FOR ACCESSING MULTIPLE ELEMENTS:
                - querySelectorAll()
                - getElementsByClassName()
                - getElementsByTagName()

        MANIPULATING:
            COMMOM METHODS FOR WORKING WITH HTML CONTENT:
                - innerHTML
                - textContent
                - createElement

            COMMON METHODS FOR WORKING WITH TAG ATTRIBUTES
                - className / id
                - setAttribute()
                - getAttribute()
*/

// 1. TEST
let x = 10;
console.log(x);

// 2. getElementById()
// document.getElementById('testParagraph').style.color = 'blue';

let testParagraph = document.getElementById('testParagraph');
testParagraph.style.color = 'blue';
console.log(testParagraph);

// 3. querySelectorAll() , innerText , innerHTML
console.log(document.querySelectorAll('p.sampleClass')); // querySelectorAll() returns a nodelist containing all elements that match the specified group of selectors.

// document.querySelectorAll('p.sampleClass')[0].innerText = 'our text has changed!'

let changeAll = document.querySelectorAll('p.sampleClass');

changeAll.forEach(pTag => {
    // pTag.innerText = 'my text has changed using a forEach() method!';
    // pTag.textContent = 'my text has changed using a forEach() method';
    pTag.innerHTML = '<li>my text has changed using a forEach() method</li>'
})

/*
    - innerText simply references or allows us to change the text of a specified element. Will return only visible text in a node.
    - textContent does the same thing as innerText, but will return the FULL text of a node.
    - innerHTML allows to set text as well as HTML elements, which will be nested inside of the current HTML element we're referencing.
*/

console.log(document.getElementById('spanTest').innerText);
console.log(document.getElementById('spanTest').textContent);

// 4. addEventListener() - click
// document.getElementById('clickThisButton').addEventListener('click', event => {
//     // console.log(event);
//     event.target.style.backgroundColor = 'blue';
// })



/*
************
CHALLENGE
************
- make the button toggle between red and blue when clicked
*/

let isColored = false;

document.getElementById('clickThisButton').addEventListener('click', listener)

function listener() {
    if(isColored) {
        event.target.style.backgroundColor = 'blue';
        isColored = false;
    } else {
        event.target.style.backgroundColor = 'red';
        isColored = true;
    }
}

// 5. addEventListener() - keyup // getElementsByTagName()

// console.log(document.getElementsByTagName('p'));

document.getElementById('nameInput').addEventListener('keyup', event => {
    console.log(event.target.value);
    document.getElementsByTagName('p')[0].innerText = 'SOMETHING CHANGED!';

    if(event.target.value == ''){
        document.getElementsByTagName('p')[1].innerText = 'NOTHING HAS BEEN TYPED';
    } else {
        document.getElementsByTagName('p')[1].innerText = `Everyone say hello to ${event.target.value}`
    }
})