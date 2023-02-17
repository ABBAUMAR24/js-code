// let circle = {
//     radius: 1,
//     location : {
//         x:1,
//         y:2
//     },
//     drow: function () {
//         console.log('drow')
//     }

// }
// circle.drow()



function creatcircle(radius,location ) {
    return{
    radius,
    location,
    drow : function () {
        console.log('drow')
        
    }
    
};

}
const circle = creatcircle(11,1)
console.log(circle.radius)

// using constructure function
function Circle(radius,location) {
    this.radius = radius
    this.location = location
    this.drow = function () {
        console.log('drow');
    }
    
}
const newcircle = new Circle (1)

console.log(this)