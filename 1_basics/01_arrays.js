// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  will add the value on top or starting
// myArr.shift()  will remove the value from start

// console.log(myArr.includes(9)); will tell the if that element exist or not(boolean output as true or false)
// console.log(myArr.indexOf(3));  will give index number if that number exist in array

// const newArr = myArr.join() it will combine all values and will change it in string
console.log(typeof newArr); it will be string


// console.log(myArr);  
// console.log( newArr);



// slice, splice -- slice excludes the last mentioned index,

** splice changes the original array fetching the mentioned index items




console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
