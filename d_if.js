//valiar si algo es tru o false
//if
if (/* lo que es verdad */){
    /* lo que va a pasar si es verdad */ 
}else{   //si es falso esto va a pasar
    /* lo que va a pasar si es falso */
}

if (false){
    console.log("Hola");
} else {
    console.log("soy falso");
}

//validadcion else if (sigue validando si no fue verdadero), y queremos seguir evaluando

var edad = 27;

if (edad === 18) {
    console.log("Puedes votar sera tu 1ra votacion");
} else if (edad > 18){
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aún no puedes votar");
} 

//>>
Puedes votar de nuevo



//Operador ternario
/*generar un if y el else en una sola linea*/

//sintaxis
condition ? true : false;
/*si condition es verdad pasara lo que diga en true, sino lo que se aloja en false(osea despues de los dos puntos)*/

//Ejemplo
var numero = 1;

var resultado = numero === 1 ? "si, soy un uno" : "no, no soy un uno";

console.log(resultado)
//>>
si, soy un uno


//RETO(P,PL,T)
//-generar varibales (piedra-papel-tijera)
//-generar funcion que mande a llamr la funcion con el parametro si vas a jugar con p,pl,t
//-dentro de  la funcion genere la validacion si tu variable(p,pl,t) le gana a la variable que la maquina escogio y que regrese como resultado si gane o perdi 

//como hacerlo?

    //empezar por la logica de la valiadacion, si ya hay las avriables(p,pl,t) y se le pasa una variable(p,pl,t), entoces validar cual le gana  a cual 

        //encapsularla en una funcion, con la que yo mande a llamr esa funcion con mi parametro y lo valide en esas condiciones y me genere si gane o perdi 