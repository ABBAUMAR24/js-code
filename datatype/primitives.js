// null
let mydata;
console.log(mydata);
console.log(typeof mydata) === undefined;
// assigning null value
let mymata1 = null;
console.log(mymata1);
console.log(typeof mymata1) == Object;

// TASK Write a piece of code that will create variables and initialize them with values of Boolean, Number, BigInt, String and undefined types using (whenever possible) literals and constructor functions.
// Print all values and all types of those values using console.log. Try to use string interpolation to display the value and type at the same time with a
//  single console.log call, for example, in the following form: 1000 [number].
let data1 = String("abba");
let data2 = Boolean("false");
let data3 = Number(5);
let data4 = BigInt(12e5);
let data5 = undefined;

// template letral
console.log(`${data1} : ${typeof data1}`);
console.log(`${data2} : ${typeof data2}`);
console.log(`${data3} : ${typeof data3}`);
console.log(`${data4} : ${typeof data4}`);

// Carry out a chain of conversions: create a Boolean from a BigInt created from a
// Number that was created from a String. Start with the value "1234". Is it possible?

let newdata1 = BigInt(data3);
let newdata2 = Boolean(data4);
let newdata3 = Number(data1);
console.log(typeof newdata1);
console.log(typeof newdata2);
console.log(typeof newdata3);

// Try to modify the line
// const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1)
str = Number("1");
str1 = 42 + str;
console.log(str1);
