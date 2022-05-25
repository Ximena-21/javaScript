const tienda = {

    nombre: 'tienda de la esquina',
    dueño: 'pepe',
    productos: [
        {name: 'jabon', price: 5000, stock: 6},
        {name: 'leche', price: 5000, stock: 5},
        {name: 'escoba', price: 5000, stock: 33},
        {name: 'azucar', price: 5000, stock: 10},
    ]
};

function modPrice (nombre,precio) {

    const modPrice = tienda['productos'].find((producto) => {

        return producto.name === nombre
    });

   /*  console.log(modPrice) */

    modPrice.price = precio

}; 

function deleteProduct (nombre) {

    const productoBuscado = tienda['productos'].find((producto) => {

        return producto.name === nombre
        
    });
    
    const posicionProducto = tienda['productos'].indexOf(productoBuscado);

   
     /* console.log(posicionProducto) */
    /* delete tienda['productos'][poscionProdcuto] */
    /* const eliminarProducto = tienda['productos'].splice(poscionProducto,1); */
    
   /*  console.log(tienda['productos'].splice(posicionProducto,1)) */

    tienda['productos'].splice(posicionProducto,1)
 };

 deleteProduct('leche');

 console.log(tienda)