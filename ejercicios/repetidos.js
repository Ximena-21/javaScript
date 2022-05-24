//dada una lista cualquiera y un valor (elemento) cualquiera encontrar cuantas veces esta dentro de esa lista
//una funcion que me imprima cuantas veces esta el elemento dentro de la lista 

    //una funcion dentro de un forEach que me recorra todo el array en busca del los repetidos


        //una variable que me guarde los repetidos,

        /* const elementos = []; */

        
        function ejecutar(array,valor){
            
            let contar = 0;

           /*  array.forEach(function(elemento){
                if (array[elemento] === valor) {
                   return contar++;
                };
            }); */
            //usar funcion flecha mejor 

            array.forEach((elemento)=>{
                if (array[elemento] === valor) {
                    return contar++;
                 };
            });



            
            console.log(`El elemento ${valor} se repite ${contar} veces`)
        };

        ejecutar([1,'paula',2,'paula',2,'sofia',3,4],4)

    



// dos problemas:
    // si tengo un array vacio comom hago para llamra sus elementos, 
    //o el valor de su elemento

    //si tengo una funcion, la cual quiero que sus parametros sea 
    // una lista, y un valor a buscar, como hago para que me lo lea