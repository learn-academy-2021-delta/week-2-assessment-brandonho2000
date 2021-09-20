// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
console.log(cohort.split(""))

// a) Your answer:["D", "e", "l", "t", "a", "", "2", "0", "2", "1"]
// b) Verify and explain:["D", "e", "l", "t", "a", "", "2", "0", "2", "1"] .split("") turns the string into an array. ("") means every letter is in its own spot in the array.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undifined
// b) Verify and explain: undefined beacuse their is no return within the function.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain:[8, 10, 12, 14, 16] because the value * 2 multiplies the items within the array by 2


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer:[12, 14]
// b) Verify and explain:[12,14] the modulo 2 === 0 makes it so that all the even numbers get logged into the array


// --------------------5) What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: {student: george, cohort: deleta, year 2021}
// b) Verify and explain:Learn { student: 'George', cohort: 'Delta', year: 2021 } the console log is calling onto the new class including the class name and all they keys inside of it.
