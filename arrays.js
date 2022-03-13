/* Array Constructors */
var myArray, myArray2;
myArray = Array.of('banana', 'apple', 'mango');

// using Array constructor
myArray2 = new Array(1, 3, 5, 7);

// creates an array of length 10 with no values
let emptyArray = new Array(10);

// an array with single element 9
let singleElementArray = Array.of(9)

// check if it is array
console.log(Array.isArray(myArray));
console.log(myArray);


// iterate through js arrays
myArray.forEach(element => console.log(element));

myArray.forEach(function(element){console.log(element)});

// loop through arrays
for (let i in myArray){
  // gives indexes of array
  console.log(i);
}

for (let i of myArray){
  // gives elements of array
  console.log(i);
}

console.log("\nArrays length \n");

/* Array length */
let array3 = [];
array3[10] = "11th element";
console.log(array3);

// arrays length is manually changeable
console.log("length of array3 is : ", array3.length);
// indices after 4 will be removed
array3.length = 5;
console.log("length of", array3, "is: ", array3.length);
