//Pell series


let n
a=1
b=0
let c

console.log("first 15 pell number")
for(n=1;n<=15;n++){
    c = a + 2*b
    console.log(c+ " ")
    a=b
    b=c  
}

