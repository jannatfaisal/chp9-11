// chp 9-11

// Q1

// var city=prompt("Which city are you from?");

// if (city== "karachi") {
//     alert("Welcome to city of lights");
// }

// Q2


// var message= prompt("what is your gender?");
// if (message=="male") {
//     alert(" Good Morning Sir");
// }

// else{
// alert("Good Morning Maam.");
// }

// Q3

//    var signal_Color=prompt("signal color?");
// if(signal_Color== "yellow" || signal_Color== "YELLOW" ) {
//     alert("ready to move");
//   }


//   else if (signal_Color== "green"  || signal_Color== "GREEN" ) {
//     alert("move now");
//   }

//   else if (signal_Color== "RED" || signal_Color== "red" ) {
//     alert("Must Stop");
//   }

//  else {
//   alert  ("invalid");
//   }

// Q4

// var currentFuel=prompt("what is your current fuel?");

// if (currentFuel<=0.25) {
//     alert("“Please refill the fuel in your car");
// }

// else{
//     alert("yor fuel is ok");
// }

// Q5

// a.
// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }


// b.
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// } //false he yeh 

var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }


// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }


// if ("car" < "cat"){
//     alert("car is smaller than cat");
// }

// Q6

// var subject1 = parseFloat(prompt("What are your Urdu marks?"));
// var subject2 = parseFloat(prompt("What are your Math marks?"));
// var subject3 = parseFloat(prompt("What are your English marks?"));
// var totalMarks = parseFloat(prompt("What is your total marks?"));

// var obtainedMarks = subject1 + subject2 + subject3;
// var percentage = (obtainedMarks / totalMarks) * 100;

// document.write("Your Percentage: " + percentage.toFixed(2) + "%<br>");

// if (percentage >= 80) {
//     document.write("Excellent Grade A");
// } else if (percentage >= 70) {
//     document.write("Good");
// } else if (percentage >= 60) {
//     document.write("You Need to Improve.");
// } else {
//     document.write("Fail");
// }

// Q7

// var numbers=7;
// var guess= parseFloat(prompt("guess secret number"));

// if (guess===numbers) {
//     alert("Bingo! Correct answer.");
// }

// else if(guess +1 === numbers){
//     alert("close enough to the correct answer.");
// }

// else{
//     alert("Try again.");
// }

// Q8

// var number=parseInt(prompt("any number?"));

// if (number% 3 ===0) {
//     alert("it is divisible ");
// }

// else{
//     alert("its not divisible");
// }

// Q9

// var number = parseInt(prompt("Koi number daalein:")); 

// if (number % 2 === 0) {
//     alert("Yeh ek even number hai.");
// } else {
//     alert("Yeh ek odd number hai."); 
// }

// Q10

// var temperature = parseFloat(prompt("Enter the temperature in Celsius:")); // User se temperature input lena

// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// } else {
//     alert("It is cold outside.");
// }

// Q11

// var firstNumber = parseFloat(prompt("Enter the first number:"));
// var secondNumber = parseFloat(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");


// var result;

// if (operation === "+") {
//     result = firstNumber + secondNumber;
// } else if (operation === "-") {
//     result = firstNumber - secondNumber;
// } else if (operation === "*") {
//     result = firstNumber * secondNumber;
// } else if (operation === "/") {
//     if (secondNumber !== 0) {
//         result = firstNumber / secondNumber;
//     } else {
//         alert("Division by zero is not allowed.");
//     }
// } else if (operation === "%") {
//     result = firstNumber % secondNumber;
// } else {
//     alert("Invalid operation entered.");
// }


// if (result !== undefined) {
//     alert("The result is: " + result);
// }
