let adaa =  {}
console.log(typeof adaa)
// object 
let data = {
    name: 'John',
    phone: +02363736

}
console.log(data.name,data.phone)
// more object example
let user1 = {
    name : 'abba umar',
    phone : 09829398398,
    age : 34 ,
    email: 'abbaumar360@gmail.com',
    state : 'kano'
    
    }
    
 let user2 = {
    name : 'sani umar',
    phone : 04824448398,
    age : 34 ,
    email: 'abbaumar65@gmail.com',
    state : 'jigawa'
    
    }
    // to delete data from object / this will delete phone from the data set
    delete user2.phone


    user2.age = 28
    console.log(user1.name)
    console.log(user2.age)

    // array in array value onlike object, in object we store key and value
    // example
    let months = ['jan','feb', 'mar', 'apr']
 
    console.log(months[0])
    
    months[0]= 'january'
    
    console.log(months)

    

    // another  example of split
    let months = 'jan,feb,mar,apr'
 
    let newmonth = months.split(',')[0] == 'jan' && 'january'
    
    console.log(newmonth)

    let dataempty = []
    console.log(dataempty[0])  // --> undefined

    // another example of array
    let nestedarray = [['sani',67,false,'abba'],['jamilu',17,true,'atika']]
    console.log(nestedarray[0][1])
    console.log(nestedarray[0][0] . toUpperCase())
    let users = [
    
        {
        name : 'abba umar',
        phone : 09829398398,
        age : 34 ,
        email: 'abbaumar360@gmail.com',
        state : 'kano'
        
        },
        {
        name : 'sani dauda',
        phone : 04824448398 ,
        age : 34 ,
        email: 'abbaumar65@gmail.com',
        state : 'jigawa'
        
        }
        ] 
        
        console.log(users[1].name)
        console.log(users[0].age)
        
        users[2] = {
            name:'lawan bala',
            phone:92893937,
            age:45,
            email:'babalala@yahoo.com',
            state:'gusau'
            }
        console.log(users[2].name)

        // another example of complex data type - array cd

        let months = ['jan','feb', 'mar', 'apr']
        let day = 'mon'
        console.log(typeof months) // Object
        console.log(months instanceof Array) // true
        console.log(day instanceof Array) // false
        
    