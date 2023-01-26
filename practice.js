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