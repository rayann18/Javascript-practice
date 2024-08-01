// TAKE OTHER FUNCTIONS AS ARGUMENTS AND RETURNS A FUNCTION AS A RESULT
function pizzaAvailable(){
if(pizza == true){
  return 'ok'
} else{
  return 'not available'
}
}

function billIspaid(){
return 'order will be on the way'
}

function sendVerification(pizzaAvailable,billIspaid){ // send verification is hof, pizzaavailabe&&billispaid are functions passed as arguments
  if(pizzaAvailable()){
    if(billIspaid()){
      console.log('order on the way')
    }
  }
}

// Arrays
const newAarray = [1,2,3].map(x => x*2)
console.log(newAarray)

//callbacks
function placeOrder(order,callback){
  console.log(`order placed for : ${order}. please wait for the buzzer.`)

  setTimeout( () => {
    console.log('buzzer : your order is ready!');
    callback(order) // callback executed on order complete
  }, 3000)
}
function collectOrder(order){
  console.log(`collecting the ${order}.enjoy your meal`)
}
placeOrder('pizza',collectOrder) //collectorder is a callback