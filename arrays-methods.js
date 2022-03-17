// map() method, syntax: array.map(function)
const array1 = [1, 4, 9, 16];
const array2 = [1, 2, 5, 6, 9]

// array.map(function)
const map1 = array1.map(x => x * 2);
console.log(map1);

/* "every()" method, syntax: array.every(function)
check whether all elements in the array pass the given function
*/

console.log(`Every Element in ${array1} greater than zero`);
console.log(array1.every(x => x > 0));

/* "filter()" method, syntax: array.filter(function)
 returns a new array that pass the test provided by the function
*/

console.log(`Elements in ${array1}  which are greater than 4`);
console.log(array1.filter(x => x > 4));


/* "at()" method useful method for getting values from last
 returns the last value (not supported in old browsers or node version 14)
*/
// console.log(array1.at(-1));

/* "find()" method, syntax array.find()
returns the first value that satisfies the testing function
*/
function testFunc(element) {
	return element > 2;
}
console.log(array1.find(x => x > 10));
console.log(array1.find(testFunc));

// "reduce()" method
// 
const array3 = [175, 50, 25, 10, 90];
console.log(array3.reduce(myFunc))
function myFunc(total, num) {
	/* When used with reduce method, takes first element as 'total'
	   and iterates through array element while subtracting from total
	   - total: initial value or previously returned value of function
	   - currentValue/num: The value of current element
	*/
	console.log('total ', total, ' num: ', num);
	return total - num;
}

// reduce method using function expression
console.log(array3.reduce(function (previousValue, currentValue) {
	return previousValue + currentValue
}, 0))

// reduce method using arrow function
console.log(array3.reduce((previousValue, currentValue) => previousValue + currentValue, 0))