// a good way to handle asynchronous code
// can be pending ie promise not fulfilled, fulfilled meaning operation is successfull or rejected meaning an error occured

// create a promise, we use the promise constructor
let promise = new Promise((resolve, reject) => {
  // do something
})
// if promise returns succesfull, resolve function is called,,  else an error,reject function is called example
const Count = true;
 let countValue = new Promise((resolve, reject) => {
  if (Count){
    resolve('their is count value.')
  } else{
    reject('no count value')
  }
 });

 // then method is used with callback when promise is successfully fulfilled

 let countValue1 = new Promise((resolve, reject) => {
  resolve('promise resolved')
 });
 // executed wheen a promise is succesfully resolved
 countValue1.then( (result) => {
  console.log(result)
 }).then( () => {
  console.log('you can call multiple functions this way')
 })

 // catch method used with a callback when apromise is rejected or an error occurs

 let countValue2  = new Promise((resolve, reject) => {
  reject('promise rejected')
 })
 countValue2.then( (result) => {
  console.log(result)
 }).catch( (result) => {  // executes if their is an error
console.log(result)
 })

 // finally method gets executed when promise is either resolved successfully or rejected
 
 let countValue3 = new Promise((resolve, reject) => {
  reject('promise rejected')
 })
 .catch( (greet) => {
  console.log('this code is executed')
 })


 // TYR-CATCH STATEMENT
 // WRAPPING up a block of code in try block and catching potential errors in catch block
try{
  const val = 12
  const bool = ''
  const result = bool + 10;
} catch(error){
  console.log('unexpected error occured, pls try again later', error.message)
}

//catching specific errors by using multiple catch blocks
try{
  const val = 12
  const bool = ''
  const result = bool + 10;
} catch(error){
if(error instanceof RefferenceError){
  console.log('oh no, a refference error occured', error.message)
} else{
  console.log('oops, a generic error occured', error.message)
}
}
 
// throwing custom errors
class MyCustomError extends Error{
  constructor(message){
super(message)
this.name =' MyCustomError';
  }
} try{
  throw new MyCustomError('oh!, this is a custom error.')
} catch(error){
  console.log('unexpected error occured', error.name, error.message);
}