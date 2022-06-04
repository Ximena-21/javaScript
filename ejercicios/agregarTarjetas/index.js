const listaProductos = [
    {nombre: 'cafe', precio: 5000},
    {nombre: 'azucar', precio: 2500},
    {nombre: 'aceite', precio: 7000},
    {nombre: 'chocolate', precio:5000},
    {nombre: 'panela', precio: 6000},
    {nombre: 'arroz', precio: 9000},
    {nombre: 'huevo', precio: 500},
    {nombre: 'leche', precio: 3500},
    {nombre: 'canela', precio: 1900},
];



const container = document.querySelector('.containerCards')


listaProductos.forEach((producto) =>{
    

    //declarar las clases de esas tarjetas
    const tarjeta = document.createElement('div');
    const nombreProducto = document.createElement('h2');
    const precioProducto = document.createElement('span');
    
    nombreProducto.textContent = producto.nombre;
    precioProducto.textContent = producto.precio;
    
    tarjeta.appendChild(nombreProducto);
    tarjeta.appendChild(precioProducto);
    
    container.appendChild(tarjeta);
    
});



/* for (let p = 0; p < listaProductos.length; p++){

    const tarjeta = document.createElement('div');
    const nombreProducto = document.createElement('h2');
    const precioProducto = document.createElement('span');

    nombreProducto.textContent = listaProductos[p].nombre; //tenia listaProductos.nombre y no encontraba el valor, 
    precioProducto.textContent = listaProductos[p].precio; //porque no estaba teniendo en cuenta el indice del for declarado en la varible p
    

    tarjeta.appendChild(nombreProducto);
    tarjeta.appendChild(precioProducto);
    
    console.log(tarjeta)
};
 */
/*  function crearTarjeta () {
    
    const tarjeta = document.createElement('div');
    const nombreProducto = document.createElement('h2');
    const precioProducto = document.createElement('span');
    
    nombreProducto.textContent = producto.nombre;
    precioProducto.textContent = producto.precio;
    
    tarjeta.appendChild(nombreProducto);
    tarjeta.appendChild(precioProducto);
    
    return tarjeta
    
};

for (let p = 0; p < listaProductos.length; p++){
    crearTarjeta(producto[p]);
}; */




