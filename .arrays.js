var fruits = ["apples", "bananas", "oranges", "kiwis"];
var numbers = [1,2,3,4];
var booleans = [true, false, false, true];

fruits.push("grapes");
console.log(fruits);

numbers.slice(0,1); // expecting output = 3,4
console.log(numbers);

booleans.unshift("true"); // expecting two trues at the start 
console.log(booleans)

