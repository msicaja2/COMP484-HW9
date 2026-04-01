// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
// 2. Get the current month, day, and year
// 3. Adjust month if needed (JavaScript months are 0-based)
// 4. Add leading zeros to month/day if needed
// 5. Create a string in the format: "Today is MM/DD/YYYY"
// 6. Display the result in the element with id="dateOutput"

// 1. Create a Date object
var date = new Date();

// 2. Get the current month, day, and year
var month = date.getMonth() + 1; // 3. Adjust month if needed (JavaScript months are 0-based)
var day = date.getDate();
var year = date.getFullYear();

// 4. Add leading zeros to month/day if needed
if (month < 10) {
    month = "0" + month;
}
if (day < 10) {
    day = "0" + day;
}

// 5. Create a string in the format: "Today is MM/DD/YYYY"
var dateString = "Today is " + month + "/" + day + "/" + year;

// 6. Display the result in the element with id="dateOutput"
/* Replaces the text in the paragraph with a certain id with the new string
   dateString. */
document.getElementById("dateOutput").textContent = dateString;

// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")

var num1 = "8";
var num2 = "100";

var decimal1 = "42.1";

var word = "apples";

// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()

// convert to a number
var newNum1 = Number(num1);
var newNum2 = Number(num2);
var newDec1 = Number(decimal1);
var newWord = Number(word);

// Check if NaN
console.log(num1 + " is NaN: " + Number.isNaN(newNum1));
console.log(num2 + " is NaN: " + Number.isNaN(newNum2));
console.log(decimal1 + " is NaN: " + Number.isNaN(newDec1));
console.log(word + " is NaN: " + Number.isNaN(newWord));

// Check if integer
console.log(num1 + " is Integer: " + Number.isInteger(newNum1));
console.log(num2 + " is Integer: " + Number.isInteger(newNum2));
console.log(decimal1 + " is Integer: " + Number.isInteger(newDec1));
console.log(word + " is Integer: " + Number.isInteger(newWord));

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"

var stringNum1 = "Original: '" + num1 + "' -> Converted: " + newNum1 +
                  " -> isNaN: " + Number.isNaN(newNum1) + " -> isInteger: "
                  + Number.isInteger(newNum1);

var stringNum2 = "Original: '" + num2 + "' -> Converted: " + newNum2 +
                  " -> isNaN: " + Number.isNaN(newNum2) + " -> isInteger: "
                  + Number.isInteger(newNum2);

var stringDec1 = "Original: '" + decimal1 + "' -> Converted: " + newDec1 +
                  " -> isNaN: " + Number.isNaN(newDec1) + " -> isInteger: "
                  + Number.isInteger(newDec1);

var stringWord = "Original: '" + word + "' -> Converted: " + newWord +
                  " -> isNaN: " + Number.isNaN(newWord) + " -> isInteger: "
                  + Number.isInteger(newWord);
// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)

var resultString = stringNum1 + " ||| " + stringNum2 + " ||| " + stringDec1 + " ||| " + stringWord;

// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"

document.getElementById("numberConversionOutput").textContent = resultString;

// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables

var dist1 = 140;
var dist2 = 132;

//
// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)
//

var sum = dist1 + dist2;
var avg = sum / 2;

// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
//

var avgString = avg.toLocaleString();
var totalString = sum.toLocaleString();

// FOR PART 4: Compare first driving distance with the other
var comparison;

if (dist1 > dist2) {
    comparison = "You drove more on your first drive.";
}
else {
    comparison = "You drove more on your second drive.";
}

// 4. Build a string showing your results
//

var displayString = "Your total distance driven is: " + totalString + " miles. "
                    + "Your average distance driven is: " + avgString + " miles. "
                    + comparison;

// 5. Display the results inside the element with id="mathOutput"
document.getElementById("mathOutput").textContent = displayString;


// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)
// ----------------------- DISPLAYED IN PART 3