//To find the length of string use ".length"
var lengthOfString = 0;
const String = "Mark Phornphat"
lengthOfString = String.length; //Space character between "Mark" and "Phornphat" is also counted.
console.log(lengthOfString); 

/* ----------------------------------------------String-------------------------------------------- */
var testArray = "";
testArray = String[0];
console.log(testArray);
//Also, to find the last character in array --> String[String.length - 1]
/* ----------------------------------------------String can contain many datatype-------------------------------------------- */
var testArray = ["Hello", 123]; //In JavaScript, string can store many datatypes
var testArray1 = [["hello",1], ["world", 2]]; //Nested Array
lengthOfString = testArray[1] + lengthOfString;
console.log(lengthOfString);
/* ----------------------------------------------Modify Array-------------------------------------------- */
const ourArray = [10,20,30]; //Eventhough ourArray is const but the number can still change (mutable) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
ourArray[0] = 15;
/* ----------------------------------------------Multi-dimensional Array-------------------------------------------- */
const ourArray1 = [ 
  [1,2,3], 
  [4,5,6], 
  [[10,11,12],7,8] 
];
//Want to print 10
console.log(ourArray1[2][0][0]);
/* ----------------------------------------------Push() to append the data in array-------------------------------------------- */
var arr1 = [1,2,3] //Can be any datatype
var arr2 = [["Mark", 1], ["Mo", 2]]; 
//Want to add 4,5 in arr1
arr1.push(4,5); 
console.log(arr1);
//Want to add ["Tan", 3] in arr2
arr2.push(["Tan",3])
console.log(arr2);
/* ----------------------------------------------Pop() to pop last value in array off-------------------------------------------- */
arr1 = [1,2,3];
const arr3 = arr1.pop();
console.log(arr3); //Output: [1,2]    
console.log(arr1); //Output: 3 
/* ----------------------------------------------Shift() to pop first value in array off-------------------------------------------- */
arr2 = [["Mark", 1], ["Mo", 2]];
const remove = arr2.shift();
console.log(remove)
/* ----------------------------------------------Unshift() to add the first value in-------------------------------------------- */
//If want to change ["Mark",1] to ["Tan", 1]
arr2 = ["Mark","Mo"];
arr2.shift();
arr2.unshift("Tan");
console.log("unshift:"+ arr2);
/* ----------------------------------------------function() declaration-------------------------------------------- */
function reusableFunction()
{
  console.log("Hi World");
}
reusableFunction();
/* ----------------------------------------------passing value to function with argument-------------------------------------------- */
function swapFunc(x,y) 
{
  var temp = 0;
  temp = y;
  y = x;
  x = temp;
  console.log("Swap: X = " + x+ " Y = " + y);
}
swapFunc(56,93);
/* ----------------------------------------------Use "return" on function-------------------------------------------- */
function multiplyFive(num)
{
  return 5*num;
}
const answer1 = multiplyFive(2);
console.log(answer1);
/* ----------------------------------------------Global scope --> declare variables without let, const-------------------------------------------- */
let myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  let outp = "";
  if (typeof myGlobal != "undefined") {
    outp += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    outp += " oopsGlobal: " + oopsGlobal;
  }
  console.log(outp);
}
fun1()
fun2();
/* ----------------------------------------------Local variable --> declare var, const, let variables inside the function-------------------------------------------- */
function testLocalScope()
{
  var testLocal = "Test for Local variable";
  console.log(testLocal);
}
testLocalScope();
//console.log(testLocal); //Error!
/* --------------------------------------------- Global vs. Local inside the funtion --> Declare both local and global vaiables with the same name--------------------- */
const outerWear = "T-Shirt";
function myOutfit() {
  var outerWear = "sweater"
  return outerWear;
}
myOutfit(); //The local variable will show
/* --------------------------------------------- Global variable with the variable inside local--------------------- */
let sum = 0; //Declare as global variable

function addThree() {
  sum = sum + 3;
}
function addFive()
{
  sum += 5;
}

addThree(); // sum update to 3
addFive(); // sum = 3 + 5 = 8
/* --------------------------------------------- Recieve output of "return" from function--------------------- */
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7); //Have variable to take the return value of a function 

/* --------------------------------------------- ฺBoolean Valu --> True and False--------------------- */
function welcomeToBooleans() {
  return true; //Can return via function
}
welcomeToBooleans();

/* --------------------------------------------- Recieve output of "return" from function--------------------- */
function trueOrFalse(wasThatTrue)
{
  if(wasThatTrue) //Or (wasThatTrue == true)
  {
    return "Yes, that was true";
  }
  else
  {
    return "No, that was false";
  }
}

trueOrFalse(true);
trueOrFalse(false);

/* --------------------------------------------- Comparison with the Equality Operator ( == )--------------------- */

/* NOTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  1   ==  1  // true
  1   ==  2  // false
  1   == '1' // true  "Enable type conversion"
  "3" ==  3  // true  "Enable type conversion"
*/
// Setup
function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);
testEqual(12);
testEqual("12");
/* --------------------------------------------- Comparison with the Strict Equality Operator --------------------- */

/* NOTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
3 ===  3  // true
3 === '3' // false "Not 'Enable' type conversion"
*/
function testStrict(val) {
  if (val === 7) { 
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);
testStrict(7);
testStrict("7");

/* --------------------------------------------- Comparison with the Inequality Operator--------------------- */
/* NOTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
*/ 
function testNotEqual(val) {
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(99); //Equal
/* --------------------------------------------- Comparison with the Strict Inequality Operator --------------------- */
/* ์NOTE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
*/
function testStrictNotEqual(val) {
  if (val !== 17) { 
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(17); //Equal 
/* --------------------------------------------- Comparison with the Greater Than Operator --------------------- */
/* NOTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
5   >  3  // true
7   > '3' // true  "Enable type conversion"
2   >  3  // false
'1' >  9  // false "Enable type conversion"
*/

function testGreaterThan(val) {
  if (val > 100) {  
    return "Over 100";
  }

  if (val > 10) {  
    return "Over 10";
  }
  return "10 or Under";
}

testGreaterThan(10); // 10 or Under
/* --------------------------------------------- Comparison with the Greater Than Or Equal To Operator--------------------- */
/*
6   >=  6  // true
7   >= '3' // true "Enable type conversion"
2   >=  3  // false
'7' >=  9  // false "Enable type conversion"
*/
function testGreaterOrEqual(val) {
  if (val >= 20) {  
    return "20 or Over";
  }

  if (val >= 10) {  
    return "10 or Over";
  }

  return "Less than 10";
}
testGreaterOrEqual(10); // 10 or Over

/* --------------------------------------------- Comparisons with the Logical AND(&&) Operator--------------------- */
function testLogicalAnd(val) {
  if (val >= 25 && val <= 50) {
    return "Yes";
  }
  return "No";
}
testLogicalAnd(10); // "No"

/* --------------------------------------------- Comparisons with the Logical OR(||) Operator--------------------- */
function testLogicalOr(val) {
  if (val<10 || val > 20) {
    return "Outside";
  } else{
  return "Inside";
  }
}

testLogicalOr(15); //Inside
testLogicalOr(25); //Outside

/* --------------------------------------------- Logical Order in If Else Statements (Order is important)--------------------- */
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
orderMyLogic(4); // "Less than 5"
orderMyLogic(7); //"Less than 10"

/* --------------------------------------------- Chaining If Else Statements --------------------- */
function testSize(num) {
  if (num < 5)
  {
    return "Tiny";
  }
  else if(num < 10)
  {
    return "Small";
  }
  else if(num < 15)
  {
    return "Medium";
  }
  else if(num<20)
  {
    return "Large";
  }
  else
  {
    return "Huge"
  }
}
testSize(7); //Small
testSize(14); //Medium
/* -------------------------------------------- Golf Code --------------------- */
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes == 1)
  {
    return names[0];
  }
  else if( strokes <= par - 2 )
  {
    return names[1];
  }
  else if ( strokes == par - 1)
  {
    return names[2];
  }
  else if( strokes == par)
  {
    return names[3];
  }
  else if (strokes == par +1)
  {
    return names[4];
  }
  else if (strokes == par + 2)
  {
    return names[5];
  }
  else if( strokes >= par + 3)
  {
    return names[6];
  }
}
golfScore(5, 4); // Birdie
golfScore(4, 3); //Birdie
/* --------------------------------------------- Recieve output of "return" from function--------------------- */


/* --------------------------------------------- Recieve output of "return" from function--------------------- */


/* --------------------------------------------- Recieve output of "return" from function--------------------- */


/* --------------------------------------------- Recieve output of "return" from function--------------------- */


/* --------------------------------------------- Recieve output of "return" from function--------------------- */


/* --------------------------------------------- Recieve output of "return" from function--------------------- */


/* --------------------------------------------- Recieve output of "return" from function--------------------- */


/* --------------------------------------------- Recieve output of "return" from function--------------------- */


/* --------------------------------------------- Recieve output of "return" from function--------------------- */


/* --------------------------------------------- Recieve output of "return" from function--------------------- */


/* --------------------------------------------- Recieve output of "return" from function--------------------- */


/* --------------------------------------------- Recieve output of "return" from function--------------------- */


/* --------------------------------------------- Recieve output of "return" from function--------------------- */
