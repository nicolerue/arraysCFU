var fruits = ["apples", "bananas", "oranges", "kiwis"];
var numbers = [1,2,3,4];
var booleans = [true, false, false, true];

fruits.push("grapes");
console.log(fruits);

var newNums = numbers.slice(2,3); // 
console.log(numbers);
console.log(newNums)

booleans.unshift("true"); // expecting two trues at the start 
console.log(booleans)

//INDEX POSITIONING
//If I wanted to find the first value in the fruits array, which is apple I would do: 

console.log(fruits[0]) // this would get the fruit at position 0, which is the first one since arrays are zero-indexed. 

//If I wanted to add the values of the 3rd and 4th number, 3 + 4, I would use index[2] and index [3] which would look like: 

console.log(numbers[2]+numbers[3]);
