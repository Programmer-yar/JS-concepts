/* Objects in JS:
- A set is a collection of related data or functionality
- Usually consists of several variables and functions
- An object property can itself be an object
*/



const person = {
	name: ['John', 'Doe'],
	age: 32,
	techStack: {
		'frontend': 'Vue.js',
		'backend': 'Django',
		'languages': ['python', 'javascript']
	},
	bio: function () {
		console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old`);
	},
	introduceSelf: function () {
		console.log(`Hi, I am ${this.name[0]}`);
	},
}

console.log(person.name);
person.bio();
person.introduceSelf();
console.log(person['techStack']['backend']);

// update object members
person.age = 25;
console.log(person.age);

// add new members
person.goodBye = function (){
	console.log('goodBye everybody');
}
person.goodBye();