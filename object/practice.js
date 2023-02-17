// ternary operator

let age = 20;

age = age > 18? "adult" : "teenager";

console.log(age);

// ternary operator
let number = prompt('Enter a number')
let message = (number > 90) ? 'bingo!' : 'miss'
alert (message)

// for loop 
let data = [1,2,3,4,5,6] 
for (let i = 0; i > data.length; i++){
    console.log(data[i])
}
// using while
let i = 0;
while (i < data.length){
    console.log(data[i])
    i++
}

// using for  
for (let i = 0; i < data.length; i++){
    console.log(data[i])
}

// using for of
for (let i of data){
    console.log(i)
}
// loop and array
let names = []
let isover = false
 while (!isover){
     let name = prompt('Enter a random number ,press cancle to see ur rslt')
     if (name != null){
         names.push(name)
     }else {
         isover = true
     }
     
 }
 for (i = 0; i < names.length; i++){
     console.log(names[i])
 }

//  using for of
let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "São Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
];

for (let city of cities) {
    if (city.population > 20e6) {
        console.log(`${city.name} (${city.population})`);
    }
}

// 
let gate = prompt('enter a letter:');
let win = false;

switch (gate){
     case 'a':
         alert ('A is not an Answer');
    case 'b':
        alert ('B is not an Answer');
    case 'c':
        alert ('C is the answer');
        win = true;
    default:
        alert ('u win nothing' + String (gate));
         
 }
 
 if (win){
     alert (`you win ${gate} is the right answer thanks`);
 }

//  const circle = {
//     radios : 1,
//     direction : up, 
//     location {
//         n : 2,
//     }

//  }


 