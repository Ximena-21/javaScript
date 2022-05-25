// vas a crear un objeto tienda que tenga productos ejemplo:
    //tienda = {
        //nombre: 'tiendita de la esquina',
        // dueño: 'pepe', 
        //productos : [ { name: 'jabon', price: '1000' } ]
        //};
        
    /*  enotnces si te das cuenta es un objeto que tiene una propiedad de tipo lista
    y esa lista son otros objetos  */


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

 
 //hacer 1 funcion para, añadir producots nuevos

function addProduct (name,price,stock) {
    /* llamar la propiedad del objeto y como este es un array aplicarle el metodo */
    tienda['productos'].push({name, price, stock}) 

    /* console.log(tienda) */

};

/* addProduct('chocolate', 6000, 10);
addProduct('sanpic', 4000, 20);
addProduct('galletas oreo', 500, 15); */

/* console.log(tienda) */

 //otra para añadir y restar stock sobre un producto

function modStock (nombre,cantidad) {

    const productoAModificar = tienda['productos'].find((producto) => {

        return producto.name === nombre
    });

    /* console.log(productoAModificar) */

    productoAModificar.stock = productoAModificar.stock + cantidad

}; 

/* modStock('escoba',-30)
modStock('chocolate', 20)


console.log(tienda) */

/*  restar stock sobre un producto entonces añadir y restar puede ser la misma funcion si le pasas -1
  es restart y si le pasas +1 pues es añadir, a si no haces dos funciones */
 
 //otra funcion para ajustar el precio de algun producto

 function modPrice (nombre,precio) {

    const modPrice = tienda['productos'].find((producto) => {

        return producto.name === nombre
    });

   /*  console.log(modPrice) */

    modPrice.price = precio

}; 

/* modPrice('jabon', 3000)

console.log(tienda) */


 //otra funcion para dar de baja algun producto


 function deleteProduct (nombre) {

    const productoBuscado = tienda['productos'].find((producto) => {

        return producto.name === nombre
        
    });
    
    const posicionProducto = tienda['productos'].indexOf(productoBuscado);


    tienda['productos'].splice(posicionProducto,1)
 };

/*  deleteProduct('leche');

 console.log(tienda) */

console.log(tienda)

addProduct('chocolate', 6000, 10);
addProduct('sanpic', 4000, 20);
addProduct('galletas oreo', 500, 15);

modStock('escoba',-30);
modStock('chocolate', 20);

modPrice('jabon', 3000);

deleteProduct('leche');

console.log(tienda)