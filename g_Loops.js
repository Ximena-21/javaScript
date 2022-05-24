//hacer que una tarea(funcion) pueda repetirse, sin hacerlo de forma manual
/*tienen una condicion y mientras qu eesa condicion sea verdad, la funcion se va a ejecutar, hasta que se rompa o deje de ser verdad*/

const estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

    //for
    /*se necesita inicializar una variable*/
    //sintaxis
    for(/*va a tener una variable*/ ; /*una condicion*/ ; /*otra condicion*/){
        /*lo que va a pasar*/
    }

    //ejemplo
    f/* se geenera una variable que es igual a 0, y mientras(;) esa variable la sea menor a la longitud del array, 
    entnces(;) la variable se va a aumentar en uno */
    
    for(var i = 0; i < estudiantes.length; i++){
        saludarEstudiantes(estudiantes[i]) ; //esa i seria el index de los elementos del array, y el nombre que se le dio a la variable
    }

    //>>
    Hola, Maria
    Hola, Sergio
    Hola, Rosa
    Hola, Daniel
    

    //for of 
    /*inicializar una variable en singular de nuestro array (plural), se va a ejecutar hasta que se acaben todos los 
    elementos de mi array*/
    /*la variable dentro del for es el singular, ya que el array es plurar*/


    for(var estudiante of estudiantes){
        saludarEstudiantes(estudiante) ; 
    }

    //>>
    Hola, Maria
    Hola, Sergio
    Hola, Rosa
    Hola, Daniel
    

    //while
    //sintaxis

    while(/*mientras lo que este aquiadentro sea verdad*/){
        /*esto va a estar pasando*/
    }

    //ejemplo con el anterior
    while(estudiantes.length > 0){
        var estudiante = estudiantes.shift();
        saludarEstudiantes(estudiante);
    }

    /*mientras estudiantes.length sea mayor a 0, esntonces se tiene que cumplir este ciclo, y el ciclo lo que va a 
    hacer es geenerar una variable (estudiantes) que va a ser el array con el metodo shift (que va a sacar elementos 
    del array) y va a llamr ola funcion como parametro estudiantes*/

    //>>
    Hola, Maria
    Hola, Sergio
    Hola, Rosa
    Hola, Daniel

