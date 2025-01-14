const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);   
        console.log(this);  
    }

}

// user.welcomeMessage()
// user.username = "sam"  //as we have not hardcoded the value so we can change it 
// user.welcomeMessage()

// console.log(this);    //this prints the current context will print empty object

// function chai(){
//     let username = "hitesh"  //here for current current context we are using this keyword
//     console.log(this.username);  // here we are not able use this as current context,will see current context value.
// }  // we can not use this inside function

//when we are in node environment this refers to empty object, while in  browser it refers to window object as its global object.

// chai()

// const chai = function () {
//     let username = "hitesh"   //here for current current context we are using this keyword
//     console.log(this.username);  // here we are not able use this as current context
// }


//below is arrow function

const chai =  () => {  //it is arrow function
    
    let username = "hitesh"
    console.log(this);   //here this will return empty object
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }    //in curly braces we use return 

// const addTwo = (num1, num2) =>  num1 + num2  // it is called as implicit return ,   if in saME LINE  no need to use braces 

// const addTwo = (num1, num2) => ( num1 + num2 )  //in () we do not use return 

const addTwo = (num1, num2) => ({username: "hitesh"})  //here we are returning object that is mandatory to be in {}.


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
