//js esta en un paradigam que son los objetos

//los objetos albergan propiedades(del objeto)

    //pueden guardar otros objetos, strings, numeros, funciones

//sintaxis
/*se guarda en una variable, y el contenido va a estar dentro de las llaves*/
var objeto = {};

//propiedades
/*es una combinacion entre palabras clave y valores, se asigan por :*/

//ejemplo
var miAuto = {
    marca: "Toyota";
    modelo: "Corolla";
    annio: 2020;
    
};

//para acceder a los objetos de forma especifica
    /*nombre del objeto punto(.) y la palabra clave*/

    miAuto.marca 
    //>>
    Toyota

//asi se ingresa al metodo de un objeto
var miAuto = {
    marca: "Toyota";
    modelo: "Corolla";
    annio: 2020;
    detalledelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

miAuto.detalledelAuto();
//>>
Auto Corolla 2020


//this
    /*es una variable que hace referencia al objeto (a su padre)*
    // en este caso hace referencia a miAuto a mi objeto
