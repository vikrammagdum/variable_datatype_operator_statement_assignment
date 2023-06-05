let a=7;

a+=a++ + ++a + --a + a--;
console.log(a)//39

/*solution=>

a+= means a=a+
a++ means 1stly value is saved (after used)
++a means 1stly value will be increamented then saved


a=a(+) a++ (+) ++a (+) --a (+) a--;
a=7 (+) 7 (+) 9 (+) 8 (+) 8;
39

*/