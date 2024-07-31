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
