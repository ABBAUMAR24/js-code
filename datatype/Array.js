// The length property
let Name= ['jamilu','sani','musa','atiku']
console.log(Name.length)// --> 4

Name[7]= 'dan ladi'

console.log(Name.length) // --> 8
// indexof method --> to find the index of the element
let datas = ['jamilu','sani','musa','atiku']
console.log(datas.indexOf ('sani'))// --> 1
console.log(datas.indexOf ('musa'))// --> 2
console.log(datas.indexOf ('atiku'))// --> 3

// lastindexof method --> to find the last index of the element
let datas2 = ['jamilu','sani','musa','atiku']
console.log(datas.lastIndexOf ('sani'))// --> 1
console.log(datas.lastIndexOf ('musa'))// --> 2
console.log(datas.lastIndexOf ('atiku'))// --> 3

//push method --> to add element to the end of the array
let datas3 = ['jamilu','sani','musa','atiku']
datas3.push('dan ladi')
console.log(datas3)// --> ['jamilu','sani','musa','atiku','dan ladi']

//unshift method --> to add element to the beginning of the array
let datas4 = ['jamilu','sani','musa','atiku']
datas4.unshift('dan ladi')
console.log(datas4)// --> ['dan ladi','jamilu','sani','musa','atiku']

//pop method --> to remove element from the end of the array
let datas5 = ['jamilu','sani','musa','atiku']
datas5.pop()
console.log(datas5)// --> ['jamilu','sani','musa']

//shift method --> to remove element from the beginning of the array    
let datas6 = ['jamilu','sani','musa','atiku']
datas6.shift()
console.log(datas6)// --> ['sani','musa','atiku']

//reverse method --> to reverse the array
let datas7 = ['jamilu','sani','musa','atiku']
datas7.reverse()
console.log(datas7)// --> ['atiku','musa','sani','jamilu']

// slice method --> to slice the array the first argument is the
// index of the first element and the second argument is the index
// of the last element from which it will eliminate
let datas8 = ['jamilu','sani','musa','atiku']
n2 = datas8.slice(1,3)
console.log(n2)// --> ['sani','musa']













