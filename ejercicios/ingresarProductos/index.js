const singIn = document.querySelector(".buttonSignIn")
const generate = document.querySelector(".buttonGenerate")
const card = document.querySelectorAll(".cards")

const productList = [];


function addProducts () {
    
    
    const nameProduct = document.querySelector(".addProduct").value;
    const price = document.querySelector(".priceProduct").value;
    const newProduct = {nameProduct,price};
    

    productList.push(newProduct) ;

   
};

singIn.addEventListener('click', addProducts)

/* console.log(productList)
 */

productList.forEach(() => {
    
});




// const newList = productList.push(newProduct) ;

//return newList

//tener dos input, donde ingrese unos datos y estos dados sean agregados
//a una lista, y luego me genere una tarjeta con cada producto

    //una funcion que al darle click me agrege el nuevo producto al array ____________CHECK

    //hacer que esa informacion que ingreso se guarde en una tarjeta 
        // hacer una funcion o unmetodo forEach que me itere cada elemento del array y que el contenido de cada uno lo ponga en un tarjeta
/* 
        function addCard () {
            for (let p=0 ; p < productList.length; p++){
                addCard.push(card[p])
            }
            return card
        };
 */

        //luego me imprima las tarjetas


