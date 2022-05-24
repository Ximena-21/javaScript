const articulos = [
    { nombre: " Bici", costo: 3000},
    { nombre:   "Tv", costo: 2500},
    { nombre    : "Libro", costo: 320},
    { nombre    : "Celular", costo: 100 00},
        { nombre: "Laptop", costo: 20000},
        { nombre: "teclado", costo: 500},
    { nombre: "audifonos", costo: 1700},
];


//filter
/*filtra lo que le digamos y lo pone en un nvo array sin modificar el array original*/
    //validar si es true o false, lo mete en un nuevo array

    //sintaxis
    var nombreVariable = array.filter(function(parametroEvaluar){lo que me va a retornar})
    /*se declara en un variable que me va a contener el metodo que le aplico al array y dentro de este una funcion que me va a retornar el array, con los que cumplen la validacion*/

    //ejemplo
        const articulosFiltrados = articulos.filter(function(articulo){
        return articulo.costo <= 500 
        });  
    
    //Se llama
        articulosFiltrados
    
    //>>
        (2) [{…}, {…}]
    0: {nombre: 'Libro', costo: 320}
    1: {nombre: 'teclado', costo: 500}
    length: 2


//map
/*mapea todo el contenido del array, y nos trae lo que estamos buscando*/
    //lo mete en un nuevo array


    //ejemplo
        const nombreArticulos = articulos.map(function(articulo){
        return articulo.nombre
        });  
    
    //Se llama
        nombreArticulos
    
    //>>
        (7) ['Bici', 'Tv', 'Libro', 'Celular', 'Laptop', 'teclado', 'audifonos']
        0: "Bici"
        1: "Tv"
        2: "Libro"
        3: "Celular"
        4: "Laptop"
        5: "teclado"
        6: "audifonos"
        length: 7


//find
/*este metodo valida un true y false, si encuentar lo retorna sino no regresa nada, solo regresa el primer eleemnto que cumpla con la validacion */
    //lo mete en un nuevo array con el valor que le este solicitando


    //ejemplo
    const encuentraArticulo = articulos.find(function(articulo){
        return articulo.nombre === 'laptop'
        });  
        /*regresame de tus articulos (articulo.nombre) que sea igual a 'laptop'*/

    
    //Se llama
        encuentraArticulo
    
    //>>
        {nombre: 'Laptop', costo: 20000}



//forEach
/*recorrre todos los elementos del array */
    //adentro del forEach como metodo generamos la funcion
        //no genera un nuevo array


    //ejemplo
    articulos.forEach(function(articulo){
        console.log(articulo.nombre);
    });
        /*adentro como parametro el articulo que qeueremos que nos traiga*/

    
    //>>
        Bici
        Tv
        Libro
        Celular
        Laptop
        teclado
        audifonos
    


//some
/*regresa una validacion de true o false*/
    //solo regresa si la condicion es verdadera o falsa, si existen ene el array mas no los trae


    //ejemplo
    const articulosBaratos = articulos.some(function(articulo){
        return articulo.costo <= 700;
        }); 
        /*adentro como parametro el articulo que qeueremos que nos traiga*/
        
    //Se llama
    articulosBarato    
    
    //>>
        True


    //push()
        /*agregar elementos al final del array*/

        //Array incial
        let numArray = [1, 2, 3, 4, 5]
        //declaramos la función
        function newNum(){
            //agregamos elementos a la función 
            numArray.push(6, 7)
            //revisamos el array con los elementos nuevos agregados
            console.log(numArray)
        }
        //ejecución función
        newNum()
        //nos regresa
        (7) [1, 2, 3, 4, 5, 6, 7]
        
        
        
        //shift()
            /*  elimina el primer elemento del array, el que esta en el indice 0 */
        
        
        let numArray = [1, 2, 3, 4, 5]
            console.log(numArray)
        
        let shiftNumArray = numArray.shift()
        
        console.log(numArray)
        (5) [1, 2, 3, 4, 5]
        (4) [2, 3, 4, 5]
        
        
        //otro método: pop(), elimina el ultimo elemento del array
        
        
    
