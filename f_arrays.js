//guarda valores(numero, string, objetos, etc)

//sintaxis
const nombreVariable = [];

//ejemplo
cosnt frutas = ["Manzanas", "Platanos", "Cereza", "Fresa"]

//ver la longitud del array
console.log(frutas.length)

//>>
4

//llegar al elemento dentro del array que yo quiero, si conozco donde esta posicionado
console.log(frutas[2])

//>>
cereza

//METODOS DE ARRAY
/* nos ayudan a mutar el contenido del array, lo cambian, le ñaden o le quitan*/

    //push
    /*va a aempujar elementos al final del array*/
    const masFrutas = frutas.push("Uvas");

    frutas
    //>>
    ["Manzanas", "Platanos", "Cereza", "Fresa", "Uvas"]

    //pop
    /*eliminar el ultimo elemento que existe en el array*/
    const ultimo = frutas.pop("Uvas");

    frutas
    //>>
    ["Manzanas", "Platanos", "Cereza", "Fresa"]


    //unshift
    /*va a aempujar elementos al principio*/
    const nvaLongitud = frutas.unshift("Uvas");

    frutas
    //>>
    ["Uvas", "Manzanas", "Platanos", "Cereza", "Fresa"]
    
    
    //shift
    /*va a eliminar el primer elemento del array*/
    const borrarFruta = frutas.shift("Uvas");

    frutas
    //>>
    ["Manzanas", "Platanos", "Cereza", "Fresa"]


    //indexOf
    /*nos da la poscicion del index de cereza*/
    const posicion = frutas.indexOf("Cereza");

    posicion
    //>>
    2