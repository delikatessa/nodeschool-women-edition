console.log('CHALLENGE 1:');
function ageDiff(youngest, oldest) {
    console.log(oldest.age - youngest.age);
}

var youngest = {
    name: 'Maya',
    age: 13
};

var oldest = {
    name: 'Joy',
    age: 83
};

ageDiff(youngest, oldest);

console.log('CHALLENGE 2:');
var writers = [
{
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
},
{
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
},
{
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
},
{
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
},
];

function helloWriters(writers) {
    for (let writer of writers) {
        if (writer.alive) {
            console.log(`Hi, my name is ${writer.firstName} ${writer.lastName}. I am ${writer.age} years old, and work as a ${writer.occupation}.`);
        }
    }
}

helloWriters(writers);

console.log('CHALLENGE 3:');
var first_number = 13;
var second_number = 27;

function add(x, y) {
  console.log(x + y);
}

add(first_number, second_number);

console.log('CHALLENGE 4:');

function fizzBuzz(last_number) {
    for (let i = 1; i <= last_number; i++) {
        if (i % 3 !== 0 && i % 5 !== 0) {
            console.log(i);
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else {
            console.log('Buzz');
        }
    }
}

fizzBuzz(15);

console.log('CHALLENGE 5:');
var haystack = ['hay', 'rabbit', 'needle', 'hat'];

function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === 'needle') {
            console.log(`Found the needle at position ${i}`);
            break;
        }
    }
}

findNeedle(haystack);