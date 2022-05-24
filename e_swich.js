//generar una condicion, funciona por casos, si uno no se cumple pasa el otro hasta el default

//sintasix
switch (/*lo que es verdad*/){
    case 1:
        /*lo que va a pasar si se validad es que es verdad*/
        break; //rompe la validacion...ya no va a dejar que pase a los siguientes casos si se cumple, y lo saca del switch
}

//ejemplo

const numero = 20;

switch(numero){
    case 1:
        console.log('soy un uno!');
        break;
    case 10:
        console.log('soy un 10!');
        break;
    case 100:
        console.log('soy un 100!');
        break;
    default:
        console.log('no soy nada')
}

//>>
no soy nada