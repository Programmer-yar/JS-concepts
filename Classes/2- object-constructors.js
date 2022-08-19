// create many objects of a predefined shape using function
// reference: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics

function createPerson(name) {
	// function that creates object with two members and returns it
	const obj = {};
	obj.name = name;
	obj.introduceSelf = function() {
		console.log(`Hi, I am ${this.name}\n`);
	}
	return obj;
}

/* every object created by 'createPerson' will have 2 members:
- a property called 'name'
- a method called 'introduceSelf()'
*/
let person1 = createPerson('Doe');
console.log(person1.name);
person1.introduceSelf();

let person2 = createPerson('John');
console.log(person2.name);
person2.introduceSelf();

/* Using Constructors:
- constructors name starts with capital letter by convention
- 
*/
function Person(name) {
	// constructor that creates object with 2 members
	this.name = name;
	this.introduceSelf = function() {
		console.log(`Hi, My name is ${this.name}\n`);
	}
}

const rami = new Person('mbzRamay');
console.log(rami.name);
rami.introduceSelf();