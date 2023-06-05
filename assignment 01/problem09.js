


var prompt=require('prompt-sync')();//user input permanent statement....
let choice =prompt("enter the your choice")//your choice....for user input..

 switch(choice)
{
   
    case '1':
        console.log("good")
        break;

    case '2':
        console.log("better")
         break;
         
    case '3':
         console.log("best")
        break;
        
    default :
    console.log("invalid input")
}



/*
1) if we do not put the single code('1','2','3') then the output will be always default
2) if we do not use the break statement then all o/p will be print out...suppose we are given input 1 so the o/p will be displayed better best and invalid input
*/
