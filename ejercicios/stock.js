//dada una lista d eproductos hacer una fucnion para encontar solo los productos con stock >= n

const productos =[
    {name: 'jabon', price: 5000, stock: 6},
    {name: 'leche', price: 5000, stock: 5},
    {name: 'escoba', price: 5000, stock: 33},
    {name: 'jabon rey', price: 5000, stock: 10},
    {name: 'azucar', price: 5000, stock: 2},
]


//que me retorne 
//productosConStock(10) -> retorna
//[
//      {name: 'escoba', price: 5000, stock: 33},
//      {name: 'jabon rey', price: 5000, stock: 10},
//]

//necesito un metodo filter para filtrar dentro de una funcion
//array.filter(function(currentValue, index, arr), thisValue)

function filtarProductosStock(stock){

const productosFiltrados = productos.filter(function(producto){
     return producto.stock >= stock
 })

 return productosFiltrados
};

console.log(filtarProductosStock(10))

//me retorna
/*  (2) [{…}, {…}]
    0: {name: 'escoba', price: 5000, stock: 33}
    1: {name: 'jabon rey', price: 5000, stock: 10}
    length: 2
*/




//2 ENCONTRAR UNA FUNCION PARA DESCONTAR
//funcion para descontar stock de un product en especifico
//decontarProducto('jabon rey',4) -> actualiza la lista
//console.log(productos) -> dede imprimir
//[
//    {name: 'jabon', price: 5000, stock: 6},
//    {name: 'leche', price: 5000, stock: 5},
//    {name: 'escoba', price: 5000, stock: 33},
//    {name: 'jabon rey', price: 5000, stock: 4},   cambio este
//    {name: 'azucar', price: 5000, stock: 2},
//]

        //debo hacer que me busque el elemento y a ese elemento le descuente

        function descontar(name,cantidad){

            const productoADescontar = productos.find(function(producto){
                return producto.name === name
            });

            
            productoADescontar.stock =  productoADescontar.stock - cantidad

        };

        descontar('jabon',4);

        console.log(productos)



//añadir un nuevo producto

function addProduct (name,price,stock) {

    productos.push({name, price, stock})

    console.log(productos)

};

addProduct('chocolate', 6000, 10);