/*cuando las variables y las funciones se procesan antes de que se ejecute cualquier tipo de codigo*/
//el hoisting las eleva a las lineas iniciales sin importar en que parte del codigo esten escritas
//pero lee la declaracion pero no la inicializacion en el caso de las variables <<VER LINEA 23>>

//palabra reservada para declarar una variable(const-let)
//seguido del nombre que se le va asignar a esta variable
//posteriormente se inicializa (= a lo que le vayyamos a guardar en la variable)
const miNombre = 'Paula'; 

/*aveces se va a declarar la variable peor no se va a incializar, porque aun no se conoce el valor de esta*/

//ventajas de hoisting es que te permite usar una función antes de declararla en tu código.
nombreDelGato("Dumas");

function nombreDelGato(nombre) {
  console.log("El nombre de mi gato es " + nombre);
}
/*
El resultado del código es: "El nombre de mi gato es Dumas"
*/

//se puede usar una VARIABLE en el código antes de declararla o inicializarla.

console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num = 6; // Initialization and declaration.
console.log(num); // Returns 6 after the line with initialization is executed.

/*Sin embargo, JavaScript solo levanta declaraciones, ¡no inicializaciones! Esto significa que la inicialización no ocurre hasta que se ejecuta la línea de código asociada, incluso si la variable se inicializó originalmente y luego se declaró, o se declaró e inicializó en la misma línea.*/

//PARA "let" y "const"

/*También se elevan pero, a diferencia varde , no se inicializan con un valor predeterminado. */
console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
let num = 6; // Initializations