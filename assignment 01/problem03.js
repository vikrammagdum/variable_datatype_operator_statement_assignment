y=10;
z=(++y*(y++ + 5))
console.log(z)//176

///***procedure***

//Brackets always take the first precedence
//
//• Increment/ decrement operators (associativity – right to left)
//
//• Arithmetic operator (associativity – left to right)
//
//
//(y++ + 5) -->y++ = 10+1 = 11, 11 + 5 = 16
//
//++y -->1 + 10 = 11
//
//(++y*(y++ + 5)) --> 16 * 11 = 176
