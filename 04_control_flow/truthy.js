const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values These values are considered as true when used in conditions
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");  to check if array is empty
// }  

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {   
    console.log("Object is empty");
}  // It's to check if object is empty


------------------------------------------------------------------------------------------------------------------------------------------------------


// Nullish Coalescing Operator (??): null undefined
   // it is to assign a number instead of null it will assign firstly received number if no number is received then it will assign null or udefined.
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

------------------------------------------------------------------------------------------------------------------------------------------------------


console.log(val1);

// Terniary Operator IS different from nullish, Its like if else.

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
