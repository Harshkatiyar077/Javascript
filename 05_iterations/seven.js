const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const new1 = myNumers.map(num1=>num1 * 2);

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)   //here we are applying three methods its called as chaining


console.log(new1);
console.log(newNums);             

                         // Map     //using map we can create a new array by transforming each element of existing array.
                                    //it don't change existing array.
                                    //it automatically returns(new array) value
                                    //used if required a new array after transform
                                    
                        //foreach   //to perform operation on each element, but don't need new array.
                                    //it can modify original array if required
                                    //not returns any value (we have to use if to do so)
                                    //used if only need to execute a function on each element

                        //filter    //returns or filters value only if a condition is true