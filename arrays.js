
console.log([1,2,3].map( x => x*2)); // 2,4,6
console.log([1,2,3].reduce( (x,y) => x*y )); // 6
console.log([1,3,2].sort()); // [ 1, 2, 3 ] arranges in hierarchical order
console.log([1,2,3].reverse()) // [3,2,1] reverses order of original array
console.log([1,2,3].length ) // 3

console.log([1,2,3].every(x => x> 5)); //returns true
console.log([1,2,3,4].some(x => x < 3)) // true
console.log([1,2,3,4,5].filter( x  => x< 5)) // [1,2,3,4] elements of array that meet condition specified

const arr = 
[1,2,3, 1].forEach(x => console.log(x)) // 1,2,3
 

const newAarray  = [2,3,4,6]
 const x  = console.log(newAarray.shift())    //1,  removes first array element and returns it
const y  = console.log( newAarray.unshift(5))  // adds 5 at beginning of array and returns array lenght 
 const z = console.log(newAarray.pop()) // // 3 removed 3 and returned it
const a = console.log(newAarray.push(7)) //adds 7 at array end and returns array length

const months = ['jan','feb','march','april']
console.log(months.splice(1,0, 'may'))
console.log(months.splice(4,1, 'june'))