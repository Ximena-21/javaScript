const singIn = document.querySelector(".buttonSignIn")


const productList = [];


function addProduct () {
    const name = document.querySelector(".addProduct").value;
    const price = document.querySelector(".priceProduct").value;
    const containerCards = document.querySelector(".addCard")
    
    const newProduct = {name,price};
    
    // if(name === '' || price === '') return
    // if( name !== '' && price !== '') {}

    
    
    //name y price debe contener algo diferente de un string vacio
    if( name !== '' && price !== '') {        

        //activar estilos que solo deberian ver si existe elementos
        // containerCards.style.padding = '10px'
        // containerCards.className = 'addCard tieneObjetos'
        containerCards.classList.add('tieneObjetos')

            productList.push(newProduct) ; 
            renderProduct(newProduct)   // Podria re-renderizar todo desde la lista llamadno renderAllProducts
            clearInputs()               //solicito limpieza los inputs involucrados
            
    }

    // renderAllProducts()

};

singIn.addEventListener('click', addProduct)

/* console.log(productList) */


//Renderiza un unico elemento (nuevo)
function renderProduct(product){
    
    //seleccionar el contenedor donde se va a renderizar el producto
    const containerCards = document.querySelector('.addCard')
    
    //renderizar ese elemento
    
    const newCard = document.createElement('div');
    newCard.className = "card";
    
    
    //crear un string (tal cual se escribe en html' con los datos dinamicos
    const contenidoNewCard = `
    <h2 class="name"> ${product.name}</h2>
    <span class="price"> ${product.price}</span>
    <button class="add">Add</button>
    `
    //asignar ese contenido al elemento
    newCard.innerHTML = contenidoNewCard
    
    
    const buttonAdd = newCard.querySelector('.add')
    
    
    
    // const productName = document.createElement('h2');
    // productName.className = "name";
    // const productPrice = document.createElement('span');
    // productPrice.className = "price"
    // const buttonAdd = document.createElement('button')
    // buttonAdd.className = "add"
    

    // productName.textContent = product.name;
    // productPrice.textContent = product.price;
    // buttonAdd.textContent = 'Add'
    
    // newCard.appendChild(productName);
    // newCard.appendChild(productPrice);
    // newCard.appendChild(buttonAdd);
    
    
    
    containerCards.appendChild(newCard);
    
    buttonAdd.addEventListener('click',consoleButton)
    
}

function consoleButton () {
    console.log('agregar producto al carro')
}


function clearInputs(){
    //obtener los elementos a limpiar
    const name = document.querySelector(".addProduct");
    const price = document.querySelector(".priceProduct");
    
    name.value = ''
    price.value = ''
    
}


//renderiza todos os productos tomando como referencia la lista productList
function renderAllProducts () {
    
    //borro todo lo que este renderizado en el contenedor
    const containerCards = document.querySelector('.addCard')
    containerCards.innerHTML = ''

    
    //itero todos los productos para renderizarlos de nuevo
    productList.forEach((product) => {
        
        const card = document.createElement('div');
        card.className = "card";
        const productName = document.createElement('h2');
        productName.className = "name";
        const productPrice = document.createElement('span');
        productPrice.className = "price"
        

        productName.textContent = product.name;
        productPrice.textContent = product.price;
    
        card.appendChild(productName);
        card.appendChild(productPrice);
    
        containerCards.appendChild(card);
        
    });
};