
let age
let ti
let gender="female"
let tax


var prompt=require("prompt-sync")();

prompt("enter the gender (male/female)::")
prompt("enter the age::")
ti=prompt("enter the taxable income::")


if(age>65){
    console.log("no taxation")
}
    
else{
    if(ti<=160000){
    tax = 0;  //tax=0%
    }
    else if(ti<=500000)
    tax=(ti-160000)*10/100  //tax=10%
    
    else if(ti<=800000)
    tax=34000 + (ti-50000)*20/100  //tax=20%
    
    else
    tax=94000 + (ti-800000)*30/100  //tax=30%

    console.log("tax payable::"+ (tax));
}

