
//In java script variables are very powerful, it can hold anything like function object etc


//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// in case of var its scope is not limited to function, which creates problems

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

//inside browser core scope and in node in coding environment globle scope is different


//we can access globals inside any local scope or functions

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

//In java script variables are very powerful, it can hold anything like function object etc

//there is a concept of hoisting go through that


console.log(addone(5))    

//in this way of function declaration it is able to access fuction even if its declared in later lines

function addone(num){
    return num + 1
}



addTwo(5)          
//in this way of function declaration it is not able to access fuction if its declared in later lines, and will give error
//here we are declaring the funtion and holding it in a variable
const addTwo = function(num){
    return num + 2
}
