let myBook={
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

// // to change the property of the title
myBook.title= 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)

// // challenge
// // model a person a name, age and location
// // generate a string based off object property values
// // increase age by one and print message again

let person = {
    name:'Sai',
    age: 30,
    location:'Boston'
}

// // to increase age by one
// // take the old value and add one
person.age= person.age + 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
console.log (`${person.name} is now ${person.age}`)


// _____________________________
// My Objects 

let hotel = {
    name: 'Sleep Well',
    rooms: 100,
    location: 'Mountains' 
}
console.log (`${hotel.name} has ${hotel.rooms} available in the ${hotel.location}`)

// to change the number of available rooms

hotel.rooms = hotel.rooms - 95
console.log (`Hotel ${hotel.name} now has ${hotel.rooms} left so book quickly!`)


// ____________________________________

// nested object

let house ={
    topFloor:{
        roomSizes: 'Large',
        attic: true
    },
    bottomFloor:{
        kitchen:'you better come and eat',
        livingRoom: 'yes, a place to relax!'
    },
    basement:{
        gameRoom: 'duh, obviously',
        gym:'for your kanye workout plan'
    }
}

console.log('attic:',house.topFloor.attic);
console.log('living room:', house.bottomFloor.livingRoom);
console.log('basement:', house.basement.gym);

