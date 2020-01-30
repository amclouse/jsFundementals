let long = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length)

let arr = ['blue', 25, true, 9, ['string'], {key: 'value'}];
console.log(arr.length);
console.log(arr.toString());

let arr = [1, 2, 3, 4, 5]
console.log(arr instanceof Object)
console.log('arr:', arr);

let reversed = arr.reverse();
console.log('reversed:', reversed);
reversed.forEach(num => console.log(num))

let arr = [1, 2, 3, 4, 5];
 if (arr instanceof Array === true)
