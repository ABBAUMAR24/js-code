// const button = document.querySelector('button');
// const body = document.querySelector('body');
// const mycolor = ['red','blue','#fff','green','yellow','pink'];

// body.style.backgroundColor = 'violet'; 
// button.addEventListener('click', changeB)

// function changeB() {
//     const colorIndex = parseInt(Math.random()*mycolor.length)
//     body.style.backgroundColor = mycolor[colorIndex]
// }

// change bg color with js 

const button = document.querySelector('button')
const body = document.querySelector('body')
const color = ['yellow','green']

body.style.backgroundColor = 'red';

button.addEventListener('click', changeZ)
function changeZ() {
  mygeneralcolor =  parseInt(Math.random()*color.length)
  body.style.backgroundColor = color[mygeneralcolor]
}


const data = [
    {names : 'abba' , age : 12},
    {names : 'umar' , age : 42},
    {names : 'jamilu' , age : 14},
    {names : 'nasiri' , age : 434},
    {names : 'abba' , age : 4},
    {names : 'abba' , age : 4},
    {names : 'abba' , age : 1}

]
// filter
const data1 = data.filter(mydata => mydata.age >= 23)
console.log(data1)


// map 
// sqrt
const OnlyNames = data.map(sunaye => Math.sqrt(sunaye.age))
console.log(OnlyNames)
// map
// addition
const OnlyName = data.map(sunaye => sunaye.age + 22)
console.log(OnlyName)

function getdata() {
  return document.getElementById('ii').innerText
} alert(getdata())




const dats = data.map(all => all.names)
button.addEventListener('click' , dats)












