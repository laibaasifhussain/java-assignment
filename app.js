// chap 1


window.onload = function() {
  var messageElement = document.getElementById("message");
  var messages = [
      "Hello!",
      "This is the first message.",
      "This is the second message.",
      "This is the third message.",
      "This is the last message."
  ];
  var currentIndex = 0;
            messageElement.innerHTML = messages[currentIndex];
            function displayNextMessage() {
                currentIndex++;
                if (currentIndex < messages.length) {
                    messageElement.innerHTML = messages[currentIndex];
                }
            }
            setInterval(displayNextMessage, 2000);
        };




        console.log("Hello! This is a generated message.");
console.log("You can customize this message to display whatever content you want.");
console.log("Feel free to use JavaScript to generate dynamic messages in the developer console!");




function showWelcomeMessage() {
  alert("Welcome to our website!");
}

// Function to show a confirmation dialog and display a message based on user's choice
function showConfirmationDialog() {
  var result = confirm("Are you sure you want to proceed?");
  if (result) {
      alert("Great! Proceeding with the action.");
  } else {
      alert("Action cancelled.");
  }
}
function showPromptDialog() {
  var name = prompt("Please enter your name:");
  if (name) {
      alert("Hello, " + name + "! Welcome to our website.");
  } else {
      alert("Hello, guest! Welcome to our website.");
  }
}




// --------chap 2----------
// -----------VARIABLES FOR STRINGS---------

var username = "laiba asif";
alert(username)
console.log(username)

var myName = "Your Full Name";
var myName = "Laiba Asif";
alert(myName)
console.log(myName)

var message;
message = "Hello World";
alert(message);

var firstName = "Laiba";
var lastName = "Asif";
var age = 18;
var grade = "A+";
var course = "Certified Mobile Application Development";
alert("First Name: " + firstName);
alert("Last Name: " + lastName);
alert("Age: " + age);
alert("Grade: " + grade);
alert("course")

var email = "example@example.com";
var alertMessage = "Your email address is: " + email;
alert(alertMessage);

var book = "A smarter way to learn JavaScript";
alert(book);
console.log(book)

var paragraph = document.createElement("p");
paragraph.innerHTML = "heyy,I can write HTML content through JavaScript";
document.body.appendChild(paragraph);

// --------chap 3----------
// ------VARIABLES FOR NUMBERS------

var age = 30;
alert("Your age is: " + age + " years old.");

if (!localStorage.getItem("visitCount")) {
  localStorage.setItem("visitCount", 1);
}
var visitCount = parseInt(localStorage.getItem("visitCount"));
localStorage.setItem("visitCount", visitCount);
alert("You have visited this site " + visitCount + " times.");

var birthYear = 2003;
document.write("My birth year is: " + birthYear);

// ---------------

var visitorName = "Laiba Asif";
var productTitle = "T-shirt";
var quantity = 5;
document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");


// --------chap 4---------
// ----------VARIABLE NAMES LEGAL & ILLEGAL-----------

var num1 = 10, num2 = 20, num3 = 30;

// legal
// firstName
// _age
// user123
// $amount
// is_active

// illegal
// 123user
// first-name
// #&true
// my variable

// ----------chap 5---------
// ---------MATH EXPRESSIONS-------

/* <h2>Addition Program</h2> */
// var num1 = parseFloat(prompt("Enter first number:"));
// var num2 = parseFloat(prompt("Enter second number:"));
// document.write("The sum of " + num1 + " and " + num2 + " is: " + sum);


const ticketPrice = 600;
const numberOfTickets = 5;
const totalCost = ticketPrice * numberOfTickets;
console.log(`The cost of buying ${numberOfTickets} tickets to the movie is ${totalCost} PKR.`);

function generateTable() {
  var number = parseInt(document.getElementById("number").value);
  var table = document.getElementById("table");
  table.innerHTML = "";
  for (var i = 1; i <= 15; i++) {
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = number;
    cell2.innerHTML = "x " + i + " = " + (number * i);
  }
}

var ticketprice = 600;
var numTickets = 5;
var totalcost = ticketprice * numTickets;
document.write("<p>Ticket Price: " + ticketprice + " PKR</p>");
document.write("<p>Number of Tickets: " + numTickets + "</p>");
document.write("<h4>Total Cost: " + totalcost + " PKR</h4>");


// var number = 4;
// var table = document.getElementById("table");
// for (var i = 1; i <= 15; i++) {
//   var row = table.insertRow();
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   cell1.innerHTML = number;
//   cell2.innerHTML = "x " + i + " = " + (number * i);
// }


console.log("Multiplication Table of 4:");
for (var i = 1; i <= 15; i++) {
  var result = 4 * i;
  console.log("4 x " + i + " = " + result);
}

var celsiusTemp = 25;
var fahrenheitTemp = (celsiusTemp * 9/5) + 32;
console.log(celsiusTemp + "°C is " + fahrenheitTemp + "°F");

var fahrenheitTemp2 = 77;
var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;
console.log(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C");

var celsiusTemp = 25;
var fahrenheitTemp = (celsiusTemp * 9/5) + 32;
document.write("<p>" + celsiusTemp + fahrenheitTemp)

var fahrenheitTemp2 = 77;
var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;
document.write("<p>" + celsiusTemp + fahrenheitTemp)



var priceItem1 = 10.99; // Price of item 1
var priceItem2 = 15.99; // Price of item 2
var quantityItem1 = 2; // Ordered quantity of item 1
var quantityItem2 = 1; // Ordered quantity of item 2
var shippingCharges = 5.99; // Shipping charges
var totalcost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
document.write("<p>Price of Item 1: $" + priceItem1 + "</p>");
document.write("<p>Price of Item 2: $" + priceItem2 + "</p>");
document.write("<p>Ordered Quantity of Item 1: " + quantityItem1 + "</p>");
document.write("<p>Ordered Quantity of Item 2: " + quantityItem2 + "</p>");
document.write("<p>Shipping Charges: $" + shippingCharges + "</p>");
document.write("<h4>Total Cost: $" + totalCost + "</h4>");



// ---------chap 6 till 9-------------

var a = 2, b = 1;
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;

var name = prompt("Please enter your name:");
if (name) {
  document.write("Hello, " + name + "! Welcome!");
} else {
  document.write("Hello! Welcome!");
}


var name = prompt("Please enter your name:");
if (name) {
  console.log("Hello, " + name + "! Welcome!");
} else {
  console.log("Hello! Welcome!");
}

var number = prompt("Please enter a number:");
if (!number) {
  number = 5;
}
number = parseInt(number);
document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
  var result = number * i;
  document.write(number + " x " + i + " = " + result + "<br>");
}


var subject1 = prompt("Enter name of Subject 1:");
var subject2 = prompt("Enter name of Subject 2:");
var subject3 = prompt("Enter name of Subject 3:");
var totalMarks = prompt("Enter total marks for each subject:");
totalMarks = parseInt(totalMarks); 
var obtainedMarks1 = prompt("Enter obtained marks for " + subject1 + ":");
obtainedMarks1 = parseInt(obtainedMarks1); 
var obtainedMarks2 = prompt("Enter obtained marks for " + subject2 + ":");
obtainedMarks2 = parseInt(obtainedMarks2);
var obtainedMarks3 = prompt("Enter obtained marks for " + subject3 + ":");
obtainedMarks3 = parseInt(obtainedMarks3);
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
document.write("<h2>Result</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("</table>");
document.write("<p>Total Obtained Marks: " + totalObtainedMarks + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");


// ---------chap 9 till 11-------------
// --------USER INPUT & CONDITIONAL STATEMENT---------

var cityName = prompt("Enter city name:");
if (cityName.toLowerCase() === "karachi") {
  alert("Welcome to the city of lights");
} else {
  alert("Welcome to " + cityName);
}


var gender = prompt("Enter your gender (male/female):");
gender = gender.toLowerCase();
if (gender === "male") {
  alert("Good Morning Sir.");
} else if (gender === "female") {
  alert("Good Morning Ma'am.");
} else {
  alert("Invalid gender. Please enter 'male' or 'female'.");
}


var color = prompt("Enter color of road traffic signal (red/green/yellow):");
color = color.toLowerCase();
if (color === "red") {
  alert("Must Stop!");
} else if (color === "green") {
  alert("Can Go.");
} else if (color === "yellow") {
  alert("Ready to Stop!");
} else {
  alert("Invalid color. Please enter 'red', 'green', or 'yellow'.");
}



var remainingFuel = parseFloat(prompt("Enter remaining fuel in car (in liters):"));
if (remainingFuel < 0.25) {
  alert("Please refill the fuel in your car.");
} else {
  alert("You have enough fuel in your car.");
}


var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
  }
  var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
    var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
  }
  if (c === 13){
      alert("condition 2 is true");
    }
    if (++c < 14){
        alert("condition 3 is true");
      }
      if(c === 14){
          alert("condition 4 is true"); 
        }

        var materialCost = 20000;
        var laborCost = 2000;
        var totalcost = materialCost + laborCost;
        if (totalcost === laborCost + materialCost){
            alert("The cost equals"); 
        }
        if (true){
          alert("True"); 
      }
      if (false){
          alert("False");
      }
}




var marks1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
var marks2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
var marks3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
var totalMarks = parseFloat(prompt("Enter total marks:"));
var obtainedMarks = marks1 + marks2 + marks3;
var percentage = (obtainedMarks / totalMarks) * 100;
var grade;
if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else if (percentage >= 50) {
    grade = "D";
} else {
    grade = "Fail";
}
document.write("<h1>Marks Sheet</h1>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Obtained Marks: " + obtainedMarks + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
document.write("<p>Grade: " + grade + "</p>");



var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Incorrect guess. The secret number was " + secretNumber);
}



var number = parseInt(prompt("Enter a number:"));
if (number % 3 === 0) {
    alert("The number " + number + " is divisible by 3.");
} else {
    alert("The number " + number + " is not divisible by 3.");
}
console.log("The number " + number + " is not divisible by 3.")




var number = parseInt(prompt("Enter a number:"));
if (number % 2 === 0) {
    alert("The number " + number + " is an even number.");
} else {
    alert("The number " + number + " is an odd number.");
}
console.log("The number " + number + " is an odd number.")





var temperature = parseInt(prompt("Enter the temperature in Celsius:"));
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The weather today is normal.");
} else if (temperature > 20) {
    alert("Today's weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today's weather is so cool.");
} else {
    alert("It is very cold outside.");
}



var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");



var result;
if (operation === '+') {
    result = num1 + num2;
} else if (operation === '-') {
    result = num1 - num2;
} else if (operation === '*') {
    result = num1 * num2;
} else if (operation === '/') {
    result = num1 / num2;
} else if (operation === '%') {
    result = num1 % num2;
} else {
    alert("Invalid operation! Please try again.");
}
if (result !== undefined) {
  alert("Result: " + result);
}



// chap 12 till 13
// IF…ELSE & ELSE IF STATEMENT, 
// TESTING SET OF CONDITION


var inputChar = prompt("Enter a character:");
var charCode = inputChar.charCodeAt(0);
if (charCode >= 48 && charCode <= 57) {
    alert("The input character is a number.");
} else if (charCode >= 65 && charCode <= 90) {
    alert("The input character is an uppercase letter.");
} else if (charCode >= 97 && charCode <= 122) {
    alert("The input character is a lowercase letter.");
} else {
    alert("The input character is not a number, uppercase letter, or lowercase letter.");
}




var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));
if (num1 > num2) {
    alert("The larger integer is: " + num1);
} 
else if (num2 > num1) {
    alert("The larger integer is: " + num2);
} 
else {
    alert("Both integers are equal.");
}



var num = parseInt(prompt("Enter a number:"));
if (num > 0) {
    alert("The number " + num + " is positive.");
} 
else if (num < 0) {
    alert("The number " + num + " is negative.");
} 
else {
    alert("The number is zero.");
}



var char = prompt("Enter a character:").toLowerCase();
if (char.length === 1 && (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')) {
    alert("The character '" + char + "' is a vowel.");
} 
else {
    alert("The character '" + char + "' is not a vowel.");
}



var correctPassword = "mypassword";
var userPassword = prompt("Enter your password:");
if (userPassword === null || userPassword === "") {
    alert("Please enter your password.");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password.");
    }



var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}




var time = parseInt(prompt("Enter time in 24-hour clock format (e.g. 1900 for 7pm):"));
if (isNaN(time)) {
  alert("Invalid input. Please enter a valid time.");
} else {
  var hours = Math.floor(time / 100);
  if (hours >= 0 && hours < 12) {
    alert("Good morning!");
  } else if (hours >= 12 && hours < 17) {
    alert("Good afternoon!");
  } else if (hours >= 17 && hours < 20) {
    alert("Good evening!");
  } else if (hours >= 20 && hours < 24) {
    alert("Good night!");
  } else {
    alert("Invalid time. Please enter a valid time in 24-hour clock format.");
  }
}


// chap 14 till 16
// arrays


var studentNames = [];
studentNames.push("John");
studentNames.push("Alice");
studentNames.unshift("Bob");



var studentNames = new Array();
var studentNames = [];
studentNames.push("John");
studentNames.push("Alice");
studentNames.unshift("Bob");



var colors = ["red", "green", "blue", "yellow"];
console.log(colors[0]);
console.log(colors[2]);
colors[1] = "orange";
console.log(colors);
colors.push("purple");
console.log(colors);
colors.pop();
console.log(colors);
console.log(colors.length); 



var numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
console.log(numbers[2]);
numbers[1] = 10;
console.log(numbers);
numbers.push(6);
console.log(numbers);
numbers.pop();
console.log(numbers);
console.log(numbers.length);



var boolArray = [true, false, true, false];
console.log(boolArray[0]); 
console.log(boolArray[1]); 
boolArray[2] = false;
console.log(boolArray); 
boolArray.push(true);
boolArray.pop();
console.log(boolArray);
console.log(boolArray.length); 



var mixedArray = ["John", 25, true, 3.14, false];
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
mixedArray[3] = 2.71;
console.log(mixedArray);
mixedArray.push("Alice");
console.log(mixedArray);
mixedArray.pop();
console.log(mixedArray);
console.log(mixedArray.length);



var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>Education Qualifications in Pakistan:</h1>");
document.write("<ul>");
for (var i = 0; i < qualifications.length; i++) {
  document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ul>");



var studentNames = ["John", "Jane", "Alice"];
var studentScores = [420, 380, 450];
var totalMarks = 500;
var percentages = [];
for (var i = 0; i < studentScores.length; i++) {
  var percentage = (studentScores[i] / totalMarks) * 100;
  percentages.push(percentage);
}
for (var i = 0; i < studentNames.length; i++) {
  document.write("<h3>Student: " + studentNames[i] + "</h3>");
  document.write("Score: " + studentScores[i] + "<br>");
  document.write("Percentage: " + percentages[i] + "%<br><br>");
}



var colors = ["Red", "Green", "Blue"];
document.write("<h3>Original Array: " + colors + "</h3><br>");
var colorToAddAtBeginning = prompt("Enter a color to add at the beginning of the array:");
colors.unshift(colorToAddAtBeginning);
document.write("<h3>Array after adding color at the beginning: " + colors + "</h3><br>");
var colorToAddAtEnd = prompt("Enter a color to add at the end of the array:");
colors.push(colorToAddAtEnd);
document.write("<h3>Array after adding color at the end: " + colors + "</h3><br>");
colors.unshift("Yellow", "Orange");
document.write("<h3>Array after adding two colors at the beginning: " + colors + "</h3><br>");
colors.shift();
document.write("<h3>Array after deleting the first color: " + colors + "</h3><br>");
colors.pop();
document.write("<h3>Array after deleting the last color: " + colors + "</h3><br>");
var indexToAdd = prompt("Enter the index at which you want to add a color:");
var colorToAdd = prompt("Enter the color you want to add:");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("<h3>Array after adding color at a specific index: " + colors + "</h3><br>");
var indexToDelete = prompt("Enter the index from which you want to delete color(s):");
var numColorsToDelete = prompt("Enter the number of colors you want to delete:");
colors.splice(indexToDelete, numColorsToDelete);
document.write("<h3>Array after deleting color(s) from a specific index: " + colors + "</h3><br>");



var scores = [85, 92, 78, 95, 88, 91];
console.log("Original Array: " + scores);
scores.sort(function(a, b) {
  return a - b;
});
console.log("Sorted Array (Ascending Order): " + scores);



var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];
console.log("Original Array (Cities): " + cities);
var selectedCities = [];
for (var i = 0; i < 3; i++) {
  selectedCities.push(cities[i]);
}
console.log("Selected Cities Array: " + selectedCities);



var arr = ["This ", " is ", " my ", " cat"];
var result = arr.join("");
console.log(result);



var queue = [];
queue.push("value1");
queue.push("value2");
queue.push("value3");
console.log(queue.shift());
console.log(queue.shift()); 
console.log(queue.shift());



var stack = [];
stack.push("value1");
stack.push("value2");
stack.push("value3");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop()); 



var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
var selectMenuHTML = '<select>';
for (var i = 0; i < phoneManufacturers.length; i++) {
  selectMenuHTML += '<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>';
}
selectMenuHTML += '</select>';
document.write(selectMenuHTML);


// chap 17 till 20
// arrays and loops

const rows = 3;
const cols = 4;
const multidimensionalArray = new Array(rows).fill(null).map(() => new Array(cols).fill(null));
multidimensionalArray[0][0] = 1;
multidimensionalArray[1][2] = 2;
multidimensionalArray[2][3] = 3;
console.log(multidimensionalArray);




const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[0][0]);
console.log(matrix[1][2]);
console.log(matrix[2][1]);



for (let i = 1; i <= 10; i++) {
  console.log(i);
}



const tableNumber = parseInt(prompt("Enter the table number: "));
const tableLength = parseInt(prompt("Enter the table length: "));
if (isNaN(tableNumber) || isNaN(tableLength)) {
  console.log("Invalid input. Please enter valid numbers.");
} else {
  console.log(`Multiplication table of ${tableNumber} with length ${tableLength}:`);
  for (let i = 1; i <= tableLength; i++) {
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
  }
}



const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
console.log("Items in the array:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}



console.log("a. Counting: ");
for (let i = 1; i <= 15; i++) {
  console.log(i);
}
console.log("b. Reverse counting: ");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("c. Even: ");
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
console.log("d. Odd: ");
for (let i = 1; i <= 19; i += 2) {
  console.log(i);
}
console.log("e. Series: ");
for (let i = 2; i <= 20; i += 2) {
  console.log(i + "k");
}




const A = ["cake", "apple pie", "cookie", "chips", "patties"];
const userInput = prompt("Enter item to search:").toLowerCase();
let found = false;
for (let i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === userInput) {
    found = true;
    break;
  }
}
if (found) {
  console.log("Item found in the list.");
  alert("Item found in the list.");
} else {
  console.log("Item not found in the list.");
  alert("Item not found in the list.");
}




var a = [24, 53, 78, 91, 12];
let largestNumber = a[0];
for (let i = 1; i < a.length; i++) {
  if (a[i] > largestNumber) {
    largestNumber = a[i];
  }
}
console.log("The largest number is: " + largestNumber);


for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}