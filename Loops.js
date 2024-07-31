// FOR
for(let i =0; i < 10; i++){
  console.log(i) // 1-9
}

//WHILE
 let i = 0
 while(i<5){
  i++;
  console.log(i) //1-5
 }

 //DO-WHILE
 let iterator =0;
do{
  iterator ++ ;
  console.log(iterator)
} while(iterator < 5) // 1-5


//FOR OF 
const arr = [3,4,5]
arr.foo ='hello';
for(let i of arr){
  console.log(i) // 3,4,5
}

// FOR IN
const array = [6,7,8]
array.foo = 'hello'
for(let i in array){
  console.log(i) // 0,1,2,foo
}