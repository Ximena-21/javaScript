//hacer objetos de forma automatica
    //genera u n templeit de un objeto, generar cierta opciones que seran sus parametros y propiedades

//si tengo una lista de 30 carros, para no tener que hacer una variable y objeto por cada carro, se hace la funcionCosntrucctora

//ejemplo

    //propiedades del objeto (marca, modelo, annio)
    function auto(marca, modelo, annio){  
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio;
    }
    
    /*tengo mi funcion que se llama auto, que va a tener como parametro() las propiedades /marca, modelo, annio/ que yo espero que mi objeto tenga, y tendro como se van armar las propiedades, con la palabra clave y su asignacion */

    //para empezar a construir un objeto nuevo con relacion a este templeit
    /*se genera una variable, usando el operador new(va a agenerar una nueva instancia/un objeto de otro objeto/ de nuestra funcion constructora)*/

    var autoNuevo = new auto("Tesla", "Model 3", 2020);
    var autoNuevo2 = new auto("Tesla", "Model x", 2018);
    var autoNuevo3 = new auto("Toyota", "Corolla", 2020);


    autoNuevo
    //>>
    auto(marca: "Tesla", modelo; "Model x", annio: 2018)