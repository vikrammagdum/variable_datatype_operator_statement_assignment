var prompt=require("prompt-sync")();//user input 

//initialise every variables....
let address
let name
let type
let amount
let net_amount
let discount=0.00


//input the users......
 name = prompt("Enter customer name: " );
 amount =prompt("Enter purchase amount: ");
 type = prompt("Enter purchase type (L for Laptop, D for Desktop): ");
addrevss= prompt("enter the address of the customer")



 // Calculate discount based on purchase amount and type
 //used (nested if) condition

 if (amount<= 25000){

     if (type == 'L'){
         discount = 0;
     }
     else
         discount = 0.05;
    }

 else if (amount>=25001 && amount<=57000){
     if (type == 'L'){
         discount = 0.05;
     }
     else
         discount = 0.7;

    }
     
 else if(amount>=57001 && amount<=100000){
     if(type == 'L'){
         discount = 0.10;
     }
 }

     else{
         discount = 0.15;
     }

     
 
 
 // Calculate net amount to be paid by customer
 //formula
 net_amount = amount - (discount * amount);

 
 //Print customer name and net amount
//o/p 
console.log("customer name="+(name))
console.log("customer address="+(address))
console.log("net amount to be paid="+(net_amount))


