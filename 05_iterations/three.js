// for of

// ["", "", ""]  strings inside array
// [{}, {}, {}]  objects inside array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()  //its an  object which holds key value pairs, but it remembers insertion order as well. it does not hold any duplicate values.
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }    WE cant apply forof loops on objects like this



// Objects are not iterable that's why we use for in to access objects properties. it is also because objects does not hold any sequence like maps.

// for in loop works on  properties not on indexes