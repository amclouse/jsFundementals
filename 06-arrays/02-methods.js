let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

food.push('pizza'); // appends or 'pushes' an item into the array
console.log('push:', food);


food.splice(1, 1, 'Bananas');//(postition / how many to delete / what ti add to its place)
console.log('splice:', food);

food.splice(2, 0, 'Sweet potato pie'); // position/how many to delete (0) /what to add into its place again
console.log('splice 2:', food);

food.pop(); //removes the last item of an array
console.log('pop:', food);

food.shift();
console.log('shift:', food)

food.unshift('Popcorn', 'Steak'); //unshift adds 1 or more items to the beginning of the array
console.log('unshift:', food)

console.log('original array', food)