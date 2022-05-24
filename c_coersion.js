//forma en la que se puede cambiar un tipo de valor a otro tipo de valor

//implicita
/*el lenguaje nos ayuda y cambia de un tipo de valor a otro tipo de valor*/
4 + "7" //>> undefined - porque se usa un operador de concatenacion entonces js lo toma como string
4 * "7" //>> 28 - porque ese operador es para uso numerico entonces, js lo toma como number

//explicita
/*nosotros obligamoas a que nos cambie un valor de un tipo a otro tipo*/
var a = 20;
var b = a + "";

undefined
 
console.log(b);
//>>
20

typeof b;
//>> 
'string'

var c = String(a);
//>> 
undefined

typeof c
//>> 
'string'

console.log(c);
//>> 
20

var d = Number(c);
//>> 
undefined

typeof d
//>> 
'number'