var myArray;
myArray = Array.of('banana', 'apple', 'mango');

// check if it is array
console.log(Array.isArray(myArray));
console.log(myArray);

// iterate through js arrays
myArray.forEach(element => console.log(element));

myArray.forEach(function(element){console.log(element)});

// loop through arrays
for (let i in myArray){
  console.log(i);
}

for (let i of myArray){
  console.log(i);
}