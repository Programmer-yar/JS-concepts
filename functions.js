function square(number) {
	// gets a number and returns its square
	return number * number
}

let squareOfFive = square(5);
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