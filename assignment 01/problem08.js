// difference between (==) and  (====)

console.log(1==1)//true
console.log(1==='1')//false
console.log(1 =='1')//true


console.log(0=='')//true
console.log(0==='')//false


console.log(0===false)//false


console.log(null==undefined)//true
console.log(null===undefined)//false

/*
(==)=>  in js used for comparing two variables,but it ignore the data type of variable...
(===)=> in js is used for comparing two variables but this operator also cheak data type and compare two value...

(==) is process me  js use krte smy isme string ki value integer me convert hoti hai...isliye (1)and ('1') equals deta hai ....
it inherently does type coercion this means that befor cheaking the value its convert the type of variable to match each other 
*/