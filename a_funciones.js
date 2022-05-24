//Declarativas
//palabra reservada(function) - nombreDeMiFuncion(miFuncion) - (parametros)
function miFuncion(){
    return 3;
}
/*la funcion guarda la operacion dentro de ella*/


//Expresion
/*se hace con una variable, las variables pueden guardar cualquier valor*/
//estamos generando una variable que nos guarda una funcion 

var miFuncion = function(a,b){
    return a + b
}

//se llama
miFuncion()


//ejemplo

function saludarEstudiantes(estudiante){
    console.log(estudiante) 
    //funcion para imprimir y poder ver en la consola
}
//
saludarEstudiantes('Paula')
//imprime
Paula

//para muchos nombres sin que tenga que estar haciendo console.log x cada nombre
function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`) 
    //funcion para imprimir y poder ver en la consola
}

saludarEstudiantes('Paula')
//imprime
Hola Paula

/*Esto ya seria una tarea que facilitaria si tengo una base d edatos de 50 nombres no tendria que hacer una funcion para cada nombre*/


//dentro de la funcion puedo hacer retornar este valor, y retornar significa que me guarda este valor, 
//para usarlo mas tarde, en una variable o 
function sumar(a,b){
    var resultado = a + b;
    return resultado
}

//llamo
sumar(1,2)
//retorna
3

//sin variable y en ese caso ttendria que ejecutra la funcion para que lo retorne 
function sumar(a,b){
    return a + b;
}

//llamo
sumar(1,2)
//retorna
3