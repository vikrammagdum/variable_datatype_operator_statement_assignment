
var prompt=require('prompt-sync')();//user input permanet statement
let c=prompt("enter the marks in computer science::")//your choice
 
//(ladder)
if(c>=90 ){
    console.log("grade A")
}

else if(c>=70 && c<90){
    console.log("grade B")
}

else if(c>=50 && c<70){
    console.log("grade C")
}
else 
console.log("grade D")


/*
&& -> if both condition are true so condition will be true..
|| -> if either statement is correct then condition will be true..

*/
