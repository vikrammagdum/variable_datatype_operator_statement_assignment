
var prompt=require("prompt-sync")();//user input...


let  i
let number
let fact = 1

 number=prompt("enter the number to find the factorial::")

if(number == 0){
    console.log("the factorial of the number ${number} is 1")
}
else if(number<0){  //that is negative number...
    console.log("the factorial of negative number is not possible")

}
else{
    for( i=1;i<=number;i++){
        fact=fact*i
        console.log(fact)
    }

}




/*
factorial is a num is the product of all the number from 1 to that number 
ex. (n!)=1*2*3....n
*/

