const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)   It will push it as array inside array, so dc heros will be 4th item of marvel heros

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);  to print the flash we will have to give index like this

// const allHeros = marvel_heros.concat(dc_heros) it will add array items (not as array inside array.
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]   It is spread oprator mostly used to add 2 arrays

// console.log(all_new_heros);  

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]     it is an array containing multiple arrays, we want to make it flat array, a simple array containing all items 

const real_another_array = another_array.flat(Infinity)   we can to make it a simple flat array containing all items
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //if it is an array or not
console.log(Array.from("Hitesh"))   it will make array from content hitesh
console.log(Array.from({name: "hitesh"})) // interesting , it give empty array as its not able to make array out of it

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  it will make array of above metioned variables
