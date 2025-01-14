// Immediately Invoked Function Expressions (IIFE)

//sometimes we write db files and we want when our app starts, our db  file to start immediately to connect to db.
// we use iify to avoid globle scope variable declaration polution


//in this function invokes immediately after its declaration.

// in () we can work as it acts as working block
// () () is syntax

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  //we have to use a semicolon at the end , when writing two iify

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')    //here in execution we are passing the variable name as hitesh


