const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {        //its the example with arrow function{ H.W - revise arrow function}
//     console.log(item);
// } )

                                        //arrow function uses lexical this, it takes this from its parent

// function printMe(item){
//     console.log(item);             //here we are declaring function 
// }

//   coding.forEach(printMe)          //here we are passing call back function, not have to write () just pass function name (reference)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);            // here we can see this foreach dont get only value but it also have access to index and full array
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

// it is how we access objects inside array using for each loop. 

// it is very important to access DB using for each.

