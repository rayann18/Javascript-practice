 /*
 // using optional chaining(?.) while working with nested objects to avoid errors
 const user = {
  username: 'alice',
  age: 21,
location:{
  city: 'eldoret',
  state: 'elgon view',
}
 }
 console.log(user.location?.country) // output is undefined
*/
 // use destructuring to extract values
 const user1  = { username: 'ryan',
  password: '******',
 }
 const {username, password} = user1
 console.log(username) // ryan
 console.log(password) // *****

 // using spread operator to merge, update and clone arrays and objects
 const obj1 = {a:1, b:2 , c: 3};
 const obj2 =  {d:4 , e: 5, f: 6};
 const merged ={...obj1, ...obj2};
 console.log(merged) //output: {a:1, b:2, d:4, e: 5}

 // use template literals for string concatenetaion or using expressions
 const Name = 'derrick'
 const age =  22
 const nameAge  = `My name is${Name} , i am ${age} years old .`
 console.log(nameAge) // My name is derrick and im 22 years old

 // using consoole.table to display arrays and objects in table form
 let fruits = [
  'apple', 'guava', 'banana', 'grapes'
 ]
 console.table(fruits)

 // Javascript object methods
 // object.create
 const person = {
  isHuman : true,
  priintIntroduction : () =>{
    console.log(`my name is ${person.name}. Am i human? ${person.isHuman}`);
  }
 };
 const me  = Object.create(person);
 me.name = 'ryan'
 me.isHuman = true;
 me.priintIntroduction(); // MY NAME IS RYAN, AM I HUMAN? TRUE

 //.KEYS AND VALUES
 const num  = {
  one:1,
  two: 2,
  three: 3
 }
 console.log(Object.keys(num)) // one, two, three
 console.log(Object.values(num))// 1,2,3

 // object.entries
 const num1= {
one: 1,
two: 2,
three : 3
 }
 console.log(Object.entries(num)) // nested array of key/value pairs of an object

 // object.assign copies values from one object to another
 const name = {
  firstNmame: 'vladimir',
  secondName: 'putin'
 }
 const details = {
  job:'russian president',
  country: 'russia'
 }
 //merge objects 
 const character = Object.assign(name, details)
 console.log(character)

 //object.freeze
 const user2= {
  username : 'russia1',
  password: 'putin@russia'
 }
 //freeze the object
 const newUser = Object.freeze(user2);
 newUser.password = 'secret',
 newUser.active = true
 console.log(newUser)  // expected output { username: 'russia1', password: 'putin@russia' }

 // object.seal
 const user3  = {
  username: 'giggs',
  password: 'rayann18'
 }
 //seal the object
 const newUser1 = Object.seal(user3)
 newUser1.password = false
 newUser1.active = 'rayann18'
 console.log(newUser1) // expected output { username: 'giggs', password: false }