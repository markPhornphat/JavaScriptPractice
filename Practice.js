//Declaration in JavaScript --> var, const, let
var testVar = 0; //Can declare many times
var testVar = 5;

const testConst = 1; //Cannot change the value
// testConst = 5; 

let testLet = 5; //Cannot re-declare 
// var testLet = 1; 



/* ----------------------------------------------To find the length of string use ".length" -------------------------------------------- */
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
/* --------------------------------------------- Switch Case --------------------------------------------- */
function caseInSwitch(val) {
  switch(val)
  {
    case 1:
      return "alpha";
    case 2:
      return "beta";
    case 3:
      return "gamma";
    case 4:
      return "delta";
  }
}
caseInSwitch(1);

/* --------------------------------------------- Switch case with "Default" ------------------------------ */
function switchOfStuff(val) {
  let answer = "";
    switch (val)
    {
        case "a":
          answer = "apple";
          break;
        case "b":
          answer = "bird";
          break;
        case "c":
          answer = "cat";
          break;
        default: // If no matching statement case ==> Execute here
          answer = "stuff";
          break;
    }
  return answer;
}
switchOfStuff(1);

/* --------------------------------------------- Switch case with OR condition--------------------- */
function sequentialSizes(val) {
  let answer = "";
  switch (val)
  {
    case 1:
    case 2:
    case 3:
      answer = "Low";  // If(val = 1 || val = 2 || val = 3) ==> answer = low
      break; // "The following case statement(s) are executed until a 'break' "
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}
sequentialSizes(1);

/* --------------------------------------------- Returning Boolean Values from Functions --------------------- */
/* No need to use if, else anymore if want to return as boolean on functions*/
function isLess(a,b)
{
  return a<b;
}
isLess(12,11);
/* --------------------------------------------- Recieve output of "return" from function--------------------- */
function abTest(a, b) {
  if( a == 0 || b == 0)
  {
    return 0;
  }
  else if ( a<0 || b<0)
  {
    return undefined;
  }
  else 
  {
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
}
abTest(2,2);

/* --------------------------------------------- Counting Cards ------------------------------ */
let count = 0;

function cc(card) {
  // Only change code below this line
  
  switch(card)
  {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++;
        break;
      case 7:
      case 8:
      case 9:
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count--;
        break;
  }

  if (count > 0)
  {
    return (count + " Bet");
  }
  else
  {
    return (count + " Hold");
  } 
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

/* --------------------------------------------- JavaScript Objects--------------------------------------- */
const myDog = {
  "name": "NamTan",
  "legs": 4,
  "tails": 1,
  friends: ["Mark", "Tan"] //JS automatic change into string
};

/* --------------------------------------------- Accessing Object JS with Dot and Bracket--------------------- */
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
const Object ="shoes"
const hatValue = testObj.hat;     
const shirtValue = testObj["shirt"];
const shoesValue = testObj[Object];    

/* --------------------------------------------- Updating Object -------------------------------------- */
const myDogMark = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDogMark.name = "Taan"; //Update name                  

/* --------------------------------------------- Add New Properties to a JavaScript Object --------------------------------------- */
const myDog2 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "Boo!" //Add new object
myDog["Type"] = "Golden Retriver";

/* ---------------------------------------------Delete Properties from a JavaScript Object --------------------------------------- */
const myDog4 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog4["friend"];
delete myDog4.bark;

/* --------------------------------------------- Change Switch case, if-else to java "Object" --------------------------------------- */
/*
switch(val) {
    case "alpha": 
      result = "Adams";
      break;
    case "bravo": 
      result = "Boston";
      break;
    case "charlie": 
      result = "Chicago";
      break;
    case "delta": 
      result = "Denver";
      break;
    case "echo": 
      result = "Easy";
      break;
    case "foxtrot": 
      result = "Frank";
  }
  return result;            // Change this one to Java Object!!!!!!!!!!!!
*/
function phoneticLookup(val) {
   var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  const result = lookup[val];
  return result;
}

phoneticLookup("charlie");
/* --------------------------------------------- Testing Objects for Properties --------------------------------------- */
/*
function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // Output: TRUE
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // Output: FALSE
*/

//Obj: To return specific value from inputing key 
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp))
  {
    return obj[checkProp];
  }
  else
  {
    return "Not Found";
  }
}
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") //Output: pony
checkObj({pet: "kitten", bed: "sleigh"}, "gift") //Output: Not Found

/* --------------------------------------------- Objects Array --------------------------------------- */
const myFamily = [
  {
    "Name": "Dad",
    "Age": 62,
    "Ancester": [
      "Mark",
      "Meen"
    ],
    "Marriage": true
  },
  {
    "Name": "Mom",
    "Ancester": [
      "Mark",
      "Meen"
    ],
    "Age": 53
  },
  {
    "Name": "Meen",
    "Ancester": false,
    "Age": 23
  }
];

console.log(myFamily[0]["Name"]);

/* --------------------------------------------- Accessing Nested Objects --------------------------------------- */

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"]; //Output: maps

/* --------------------------------------------- Accessing Nested Arrays --------------------------------------- */

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  },
  {
    type: "Test"
  }
];

const secondTree = myPlants[1].list[1];  //Output: pine
myPlants
/* --------------------------------------------- JavaScript Objects--------------------------------------- */
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value)
{
  if(value === "")
  {
    delete records[id][prop];
  }
  else if(prop != "tracks")
  {
    records[id][prop] = value;
  }
  else if(prop == "tracks")
  {
    if(records[id].hasOwnProperty(prop)) //If the property exists inside object 
    {
      records[id][prop].push(value)
    }
    else
    {
      records[id][prop] = []; //assign as array
      records[id][prop].push(value);
    }
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
/* --------------------------------------------- Iterative --------------------------------------- */
const myArray = [];

var i = 5;
while (i >= 0) //Using while loop
{
  myArray.push(i);
  i--;
  console.log(myArray);
}

for(var i = 1; i<=5; i++) //Using for loop
{
  myArray.push(i); 
}
// Output: [ 5, 4, 3, 2, 1, 0 ]

/* --------------------------------------------- JavaScript Objects--------------------------------------- */
function multiplyAll(arr) {
  let product = 1;
  for(var i = 0; i< arr.length; i++)
  {
    for(var j = 0; j< arr[i].length; j++)
    {
      product *= arr[i][j];
    }
  }
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]); //Output: 5040
multiplyAll([[1], [2], [3]]); //Output: 6

/* --------------------------------------------- Do...While Loops --------------------------------------- */
i = 10;
var temp = [];
do { //KEYWORD!!!! --> DO before get in a loop
  temp.push(i);
  i--;
}while(i<10 && i>=1); 

console.log(temp); //[ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

/* --------------------------------------------- Replace Loops using Recursion --------------------------------------- */
/*  
  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
  */  // Change function to "RECURSIVE"

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
  console.log(multiply([1,2,3],3));

/* --------------------------------------------- Profile Lookup --------------------------------------- */
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for(var i = 0; i < contacts.length ; i++)
  {
    if(contacts[i]["firstName"] == name)
    {
      if(contacts[i].hasOwnProperty(prop))
      {
        return contacts[i][prop];
      }
      else
      {
        return "No such property";
      }
    }
    else if(i == 3)
    {
      return "No such contact";
    }
  }
}

lookUpProfile("Kristian", "likes"); //Check the firstname --> If exists --> Return value of prop 


/* --------------------------------------------- Generate Random Fractions with JavaScript --------------------------------------- */

var ranNum = Math.random(); //Generate random decimal number between [0,1)  เอา 0 ถึง ไม่เอา 1 |  between 0 (inclusive) and 1 (exclusive).
console.log(ranNum);


/* --------------------------------------------- Generate Random Whole Numbers with JavaScript --------------------------------------- */

var ranNum = Math.floor(Math.random() * 10); //Generate whole number between 0 - 9
console.log(ranNum);

/* --------------------------------------------- Generate Random Whole Numbers within a Range --------------------------------------- */

function randomRange(myMin, myMax) {
  return Math.floor( Math.random() * (myMax - myMin + 1) + myMin); //Specify the minimum number and maximum number 
}

console.log( randomRange(0,9));

/* --------------------------------------------- Use the parseInt Function and Radix (Second Parameter) --------------------------------------- */

const parse = parseInt("007"); //Convert String to number integer 
const parseString = parseInt("Halloween!") // IF the firtst character is string --> Can't convert to a number --> NaN
const parseBinary = parseInt("11", 2); //Can set based number at second parameter to convert number from that based to decimal

console.log(parse);
console.log(parseString);
console.log("Convert binary to decimal: " + parseBinary);

/* --------------------------------------------- Use the Conditional (Ternary) Operator --------------------------------------- */

function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal"  // a ? b : c  WHERE a is condition, b is if the condiction is true , c is when the condition is false  
}

console.log(checkEqual(1, 2));

/* --------------------------------------------- Use Multiple Conditional (Ternary) Operators --------------------------------------- */

function checkSign(num) {   // Ternary operators with IF-ELSE
  return num == 0 ? "zero"
  : (num > 0) ? "positive"
  : "negative"
}

console.log(checkSign(10));

/* --------------------------------------------- Use Recursion to Create a Countdown --------------------------------------- */

function countdown(n){
  if(n<1)
  {
    return [];
  }
  else
  {
    var countedArray = countdown(n-1);
    countedArray.unshift(n);
    return countedArray;
  }
}

console.log("Recursive countdown: " + countdown(10));


/* --------------------------------------------- JavaScript Objects--------------------------------------- */
function rangeOfNumbers(startNum, endNum) 
{
  if(endNum < startNum)
  {
    return [];
  }
  else
  {
    var countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray; 
  }
};

console.log("\nCreate Range of numbers by using 'recursion': " + rangeOfNumbers(6, 9));
console.log("--------------------------------END OF JAVASCRIPT-----------------------------------\n\n");
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------ESP6 Course-------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
console.log("--------------------------------WELCOME ES6-----------------------------------\n");

/* -----------------------------------------Difference btw. let and var-------------------------------------- */

var printNumTwo;
for (var i = 0; i < 3; i++) { //At the end of the loop --> i = 3
  if (i === 2) {
    printNumTwo = function() { //ถ้าเอา i เข้าฟังชั่น --> เจ๋ง ==> เพราะว่าตัวแปร var เป็นของ Global variable ไม่ใช่ local
      return i;
    };
  }
}

console.log("Test 'var' i = " + printNumTwo()); //var act as global variable --> 3 will be refered to printNumTwo

////////////////////////////////////// For 'let' variable
let printNumTwo1;
for (let i = 0; i < 3; i++) {  // i declared within the for loop statement it will not occur on Global variable
  if (i === 2) {
    printNumTwo1 = function() { //ในกรณีนี้จะ print i = 2 เนื้องจากเป็น local variable เนื้อจาก let คือ local variable
      return i;
    };
  }
}
console.log("Test 'let' i = " + printNumTwo1());
// console.log(i); i is not defined, since it define at loop 'block'

/* ----------------------------------------- const. -------------------------------------- */

// const --> Can't change the data inside ==> except: function, object, array are still mutable(able to change)

const s = [5, 6, 7];
// s = [1, 2, 3]; //Error! Can't change entire object
s[2] = 45; // Can change
console.log(s);

/* -----------------------------------------To prevent const. object change value-------------------------------------- */

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 