function hi(name) {
    console.log(`hello, ${name}`);

}

hi('Adam');

function Adam (ticket) {
    console.log(`i exchanged my ticket for a ${ticket}`);
}

Adam('sandwhich');

function counter(number, string) {
    for(number; number <= 10; number++){
        console.log(number);
    }
    console.log(string);
}

counter(10, 'hello')


//CHALLENGE

function myName(first, last) {
    let fullName = first + ' ' + last;
    console.log(`hello, my name is ${fullName}`)
}


myName('Adam', 'Clouse')