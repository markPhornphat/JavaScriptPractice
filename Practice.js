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