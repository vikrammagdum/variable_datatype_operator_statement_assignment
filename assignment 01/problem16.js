




let num=5  ///give the input here.....
var isPrimeNumber=true;

for(let i=2;i<num;i++){
    if(num % i == 0){
        isPrimeNumber=false
       
    }
    
}

if(isPrimeNumber==true){

console.log(' it is prime number ')
}

else{
console.log('it  is not a prime number')
}

/*
A prime number is a whole number greater than 1.(num>1)
it has exactly two factors that is 1 and the number itself.
there is only one even prime number ,thats is 2.

ex. 5-> it has only two factors 1 and itself number hense this is prime number ...
ex. 10-> it has more than one  factors 1,2,5,10 hense this is not a prime number...
*/

