/*
    - the forEach () method executes a provided function once for each element in an array
    - the forEach() method does the same thing as a for loop or for of loop- both iterate over properties in an array
*/

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for (let i = 0; i < food.length; i++){
    console.log(food[i]);
}

food.forEach(fooditem => console.log(fooditem));
fooditem = 'Pecan pie';
fooditem = 'Shrimp';
fooditem = 'Quesadilla';


fooditem.forEach(individualFoodItem =>) {
    console.log(individualFoodItem);
})

fooditem.forEach(function(fooditem, index){
    //console.log(fooditem);
    console.log(index);
})


//CHALLENGE


let movies = ['Jurrasic park', 'Joker', 'The Matrix', 'Avengers'];

movies.push('Titanic');
movies.splice(3, 1, 'Joker')

movies.forEach(movies => console.log(movie));