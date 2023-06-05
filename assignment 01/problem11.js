var prompt=require("prompt-sync")();//user input permenet line.. 


 let cost,discount,amountpayable//initialise the variables...
cost=prompt("enter the cost")//user input...

//(ladder)
if(cost<=2000){
    discount=5.00/100.00*cost
}
else if(cost>=2000 && cost<=50000){
discount=25.00/100.00*cost
}
else if(cost>=5001 && cost<=10000){
discount=35.00/100.00*cost
}
else
discount=50.00/100.00*cost
amountpayable=cost-discount;
console.log("amount payable:"+ (amountpayable))



/*fill the condition in two ways....
1) d=5.00/100.00*price
2) d=(cost*10)/100

*/