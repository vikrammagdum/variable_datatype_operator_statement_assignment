var prompt=require("prompt-sync")();//user input 

//initialise/declared every variables....
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
address= prompt("enter the address of the customer")



 // Calculate discount based on purchase amount and type
 //(nested if) condition
 //used ternary operator...

 if (amount <= 25000)
 discount = type == 'L' ? 0.00 : 0.05;
else if (amount <= 50000)
 discount = type == 'L' ? 0.05 : 0.07;
else if (amount <= 100000)
 discount = type == 'L' ? 0.07 : 0.10;
else
 discount = type == 'L' ? 0.10 : 0.15;
 
 
 
 
 // Calculate net amount to be paid by customer
 //formula
 net_amount = ((discount/100)-amount)

 
 //Print customer name and net amount
//o/p 
console.log("customer name="+(name))
console.log("customer address="+(address))
console.log("net amount to be paid="+(net_amount))