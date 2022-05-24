//imprimir en la consola una lista de nuemros dada, y que si el numero es divisible(multiplo) de 3, reemplazar por 
//la palabra fizz, si es divisible en 5 por Buzz, y si es por ambos fizzBuzz

    //1. como saber si un numero es divisible por el otro

        //n/3 pero necesitamos saber si ese resultado es entero usando el metodo Number.isInteger

    //2. condicionales y un forEach que me reocrra toda la lista y que cuando el 
        //# cumpla la validacion ejecute lo establecido 
        
        
    //3. meterlo en una funcion que tenga como parametro la lista dada y ejecute dicha funcion
        
        
        const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        
        
        listaDeNumeros.map(function(valor){
            
            
            const divisible3 = Number.isInteger(valor/3);
            const divisible5 = Number.isInteger(valor/5);

            if ( divisible3 && divisible5 ) {
                
                return "FizzBuzz"
                
            } else if (divisible3) {
                
                return "Fizz"
                
            } else if (divisible5) {
                
                return "Buzz"
                
            } else {
                return valor
            }
            
        });
        

console.log(listaDeNumeros)




// quiero hacerlo para una lista cualquiera        
 /*        const listaDeNumero = []
        
        function calcularFizzBuzz(listaDeNumeros){
                    
            const listFizzBuzz = listaDeNumeros.map(function(valor){
                
        
                    const divisible3 = Number.isInteger(valor/3);
                    const divisible5 = Number.isInteger(valor/5);
        
                    if ( divisible3 && divisible5 ) {
                        
                        return "FizzBuzz"
        
                    } else if (divisible3) {
                        
                        return "Fizz"
        
                    } else if (divisible5) {
        
                        return "Buzz"
        
                    } else {
                        return valor
                    }
            
            });
        
            return listFizzBuzz
        }; */