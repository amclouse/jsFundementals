/*
    - switch statements execute a block of code depending on different cases
    - switch statements often use the break or default keywords (or both together)
        - both keywords are optional

            - break keyword breaks us out of the current condition & switch statement
            - default keywords specifies code to run if there is no case match
            
*/

/*let officeCharacter = 'Michael';

switch (officeCharacter) {
    case "Michael":
        console.log('My mind is going a mile an hour');
        break; 
    case "Dwight":
        console.log('Perfectenschlag');
        break;
    case "jim": ('Bears beats Battlestar galactica');
        break;
    default:
        console.log ('Im sorry, ${officeCharacter}, but do I know you?*/

let dessert = "pie"
    switch (dessert) {
        case "Pie":
            console.log("pie pie me oh my");
            break;
        case "Cake":
            console.log("cake is great");
            break;
        case "Ice Cream(":
            console.log("i scream for ice cream");
            break;
        default:
            console.log ("not on the menu");
    }