// Object example
let testobject = {};
console.log(typeof testobject);

let data = ['abab','jabi','nasiru','mansur']
let d1 = data.slice(1)
console.log(d1)
// Tasks
// Objects
// Create an object that describes a train ticket and stores it in the ticket variable. The object must have three fields:

// starting station (key name from, and as a value, give the name of the nearest station in your area)
// end station (key name to, and as a value, give any other station within 100 km)
// the price of the ticket (key name price, and as a value, give the amount you would like to pay for this ticket)
// The object must be created using curly brackets, in which all fields will be listed immediately. Then display the values of all the fields of the ticket on the console.

// Declare an empty object and save it to a person variable. Using dot notation, add firstName and lastName fields to the object by entering your data as values. It will try to display the individual fields on the console.
let ticket = {
    from: 'kabuga',
    to : 'gadan-kaya',
    price: 100,
    
    };
    console.log(ticket.from)
    console.log(ticket.to)
    console.log(ticket.price)
    
let person = {};
person.firstname = 'jamil';
person.lastname = 'dan-tanimu';
console.log(person.firstname)
console.log(person.lastname)

// Task 1

// Using everything you’ve learned up until this point, write a script that asks a user about the width, height, and length of a box, then calculate and return to the user the volume of this box.

// As an example, a box with width = 20, height = 10, and length = 50 will have a volume of 10000 (omitting units, as they are not relevant in this scenario). For now, assume that the values provided by the user are valid numbers, but if you have any ideas on how, you can try to make this script in such a way that it will be resistant to invalid values.
let width = prompt('enter width:')
let height = prompt ('enter height:')
let lenght = prompt('enter lenght:')

console.log(alert (`width = ${width},height = ${height},lenght = ${lenght}`))
console.log(width + height + lenght)
// still on tamplate letrall
let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";

console.log('${str} : ${typeof str}'); // -> 123 : string
console.log('${n1} : ${typeof n1}'); // -> 123 : number
console.log('${n2} : ${typeof n2}'); // -> -123 : number
console.log('${n3} : ${typeof n3}'); // -> 123 : number
console.log('${n4} : ${typeof n4}'); //

// calculating shipping rate 
let price = prompt('Enter the price you wish to pay please:');
let shippingfee;
let total;
if (price < 100){
    shippingfee = 0
} else{
    shippingfee = 20
    let total = price + shippingfee
} console.log(`your price is : ${price} and your shipping fee is : ${shippingfee} and your total is : ${total}`)

