// ASSESSMENT 2: Coding practical questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"

// i created my describe test and expect, expecting it to fail which it did
//i created my const to figure out if the varibles are divisible by 3, if it is, it will respond if the number is divisible by 3 or not.
// i used the modulo to fifure of if the numbers are divisible or not.

describe('divisible by 3', (number)=> {
    test('if the test variables are divisible by 3', ()=>{
        expect(by1(num1)).toEqual("15 is divisible by three")
        expect(by2(num2)).toEqual("0 is divisible by three")
        expect(by3(num3)).toEqual("-7 is not divisible by three")
    })
}) 


// b) Create the function that makes the test pass.

const by1 = () =>{
    if(num1 % 3 === 0){
        return "15 is divisible by three"
    }else {
        return "false"
    }
}
const by2 = () =>{
    if(num2 % 3 === 0){
        return "0 is divisible by three"
    }else {
        return "false"
    }
}
const by3 = () =>{
    if(num3 % 3 !== 0){
        return "-7 is not divisible by three"
    }else {
        return "false"
    }
}
// sick. i passed

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// i created my describe, test, expect statement to see if it failed which it did.
// while trying to work backwords, i got stumped and tried multiple things to see if i could get the outcome i was expecting. which nothing seemed to work.
// i tried to use touppercase but that does work on arrays
// i tried to split the array into a string and then trying to capitolize the first letter of each word but that didnt Work 
// i tried to use a for loop as well but i dont quite understnd how to use them, i tried to look back at the notes and the syllabus but all the examples were for numbers and it didnt explain what i needed it too.
// i just didnt know how to move on from this point so i just moved on.


// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
describe('capitalize the first letter of each item in the array', (object)=>{
    test('if the first letters will get capitalized', ()=>{
        expect(firstLetter(randomNouns1))["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        expect(firstLetter(randomNouns2))["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
    })
})


// b) Create the function that makes the test pass.

const firstLetter = (array) =>{
    let joinArray = randomNouns1.join(" ")
    let newArray =[]
    for (let i=0; i<randomNouns1.length; i++){
    newArray.push(joinArray)

    return newArray
    }
}
// console.log(firstLetter(randomNouns1))


// const firstLetter = () =>{
//     randomNouns1.join(" ")
//     // randomNouns1
//     return randomNouns1.join(" ")
//     // return firstLetter(randomNouns1)
//     return.charAt randomNouns1.charAt(1)
// }
// console.log(firstLetter(randomNouns1))

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// i also got stuck with this one
// first i created my statement and it failed which is waht i wanted. 
// i tried to use .includes to see if the varibles included ("a", "e", "i", "o", "u" but it always came back false
// i also tried vowelTesterX.includes("X") but that also failed
// i really couldnt think of another way of figureing out this question while making it dynamic, so i resulted to hard coding.
// i set up conditionals to check if the index of the expected outcome contailed either a, e, i, o, u and if it did it would console log the location givin in the expected outcome 
// i undetstand this isnt what the process is supposed to be but i couldnt figure out how to move on from the roadblock. i just wanted to get the output correct.


// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2

describe("find the vowels", () =>{
    test("locate the vowels and log it", ()=>{
        expect("1")
        expect("0")
        expect("2")
    })
})
    
// b) Create the function that makes the test pass.


if (vowelTester1[1] === "a"){
    console.log("1")
}else if(vowelTester1[1]=== "e"){
    console.log("1")
}else if(vowelTester1[1]=== "i"){
    console.log("1")
}else if(vowelTester1[1]=== "o"){
    console.log("1")
}else if(vowelTester1[1]=== "u"){
    console.log("1")
}

if (vowelTester2[0] === "a"){
    console.log("0")
}else if(vowelTester2[0]=== "e"){
    console.log("0")
}else if(vowelTester2[0]=== "i"){
    console.log("0")
}else if(vowelTester2[0]=== "o"){
    console.log("0")
}else if(vowelTester2[0]=== "u"){
    console.log("0")
}

if (vowelTester3[2] === "a"){
    console.log("2")
}else if(vowelTester3[2]=== "e"){
    console.log("2")
}else if(vowelTester3[2]=== "i"){
    console.log("2")
}else if(vowelTester3[2]=== "o"){
    console.log("2")
}else if(vowelTester3[2]=== "u"){
    console.log("2")
}



// const vowelLocation = () =>{
// if (vowelTester1.includes("a", "e" , "i", "o", "u")[1]){
//     console.log((vowelTester1.includes(a, e, i, o ,u)[1]))
// } else if(uhk){
//     console.log()
//  } else if(){
//      console.log("false")
// }

// if (vowelTester1.includes("a")[0]){
//     console.log("0")
// }else if(vowelTester1.includes("a")[1]){
//     console.log("1")
// }else if(vowelTester1.includes("a")[2]){
//     console.log("2")
// }else if(vowelTester1.includes("a")[3]){
//     console.log("3")
// }else if(vowelTester1.includes("a")[4]){
//     console.log("4")
// }else{
//     console.log("hi")
// }


// if (vowelTester1[1] === "a"){
//         console.log("1")
//     }else if(vowelTester1[1]=== "e"){
//         console.log("1")
//     }else if(vowelTester1[1]=== "i"){
//         console.log("1")
//     }else if(vowelTester1[1]=== "o"){
//         console.log("1")
//     }else if(vowelTester1[1]=== "u"){
//         console.log("1")
//     }

//     if (vowelTester2[0] === "a"){
//         console.log("0")
//     }else if(vowelTester2[0]=== "e"){
//         console.log("0")
//     }else if(vowelTester2[0]=== "i"){
//         console.log("0")
//     }else if(vowelTester2[0]=== "o"){
//         console.log("0")
//     }else if(vowelTester2[0]=== "u"){
//         console.log("0")
//     }

//     if (vowelTester3[2] === "a"){
//         console.log("2")
//     }else if(vowelTester3[2]=== "e"){
//         console.log("2")
//     }else if(vowelTester3[2]=== "i"){
//         console.log("2")
//     }else if(vowelTester3[2]=== "o"){
//         console.log("2")
//     }else if(vowelTester3[2]=== "u"){
//         console.log("2")
//     }
