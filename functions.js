// functions can be called before they are declared
let squareOfFive = square(5);

function square(number) {
	// gets a number and returns its square
	return number * number
}

console.log("Square of 5 is ", squareOfFive);

// creating function with 'function expression'
const square1 = function(number){
	return number * number
}
console.log("Square of 6 is ", square1(6), "\n");

// recursive functions
function factorial(n) {
	// body...
	if ((n === 0) || (n === 1))
		return 1
	else
		return (n * factorial(n - 1));
}

console.log("factorial of 8 is ", factorial(5));

/* Arrow Functions: */
let addArrowFunc = (a, b) => a + b
console.log('Add Arrow Function', addArrowFunc(2, 3));

let squareOfSix = () => 6 * 6;
console.log('square of 6 arrow func', squareOfSix());

console.log('cube of 2', () => 2 ** 3);