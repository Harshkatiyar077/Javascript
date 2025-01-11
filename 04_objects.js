// const tinderUser = new Object()    it's a singleton obeject
const tinderUser = {}   its a non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)   (to add two objects)

const obj3 = {...obj1, ...obj2}  ( using spread operator to add)
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]   (puttin objects inside array)

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  will give the keys as array
// console.log(Object.values(tinderUser));  values
// console.log(Object.entries(tinderUser)); entries = key and value

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  it will return boolean value




const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

destructuring/---
    
const {courseInstructor: instructor} = course //here to get a value from course object we are destructuring it, we 

//can directly mention instructor to access courseInsructor instead of using . each time.

// console.log(courseInstructor);
console.log(instructor);

//here below is the object without name which is a json format, in which key and value both are strings
//API's are mostly in this json format or in array format


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

