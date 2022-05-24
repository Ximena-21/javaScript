//declarar un objeto de un libro contable

const libroContable = {
    enero: 0, 
    febrero: 0, 
    marzo: 100, 
    abril: 0, 
    mayo: 0, 
    junio: 0, 
    julio: 0, 
    agosto: 0, 
    septiembre: 0, 
    octubre: 0, 
    noviembre: 0, 
    diciembre: 0, 
};

// hacer una funcion que me permita, sumarle una nueva cantidad a un mes dado
function addIncome (mes,valor){

    libroContable[mes] = libroContable[mes] + valor
    /* return libroContable[mes] */ //no va return porque no necesito guardar ese valor 
    console.log(libroContable[mes])
}

//le digo lo que le quiero cambiar a un elemento del objeto

console.log(addIncome('enero',100))

//hago console.log de todo el objeto para verificar los cambios añadidos

console.log(libroContable)

// hacer una funcion que me permita, restarle una nueva cantidad a un mes dado
function deduct (mes,valor){

    libroContable[mes] = libroContable[mes] - valor
    return libroContable[mes]

}

console.log(deduct('marzo',50))

console.log(libroContable)



//llamo solo los meses actualizados

for (let mes in libroContable){
    if (libroContable[mes] > 0){
        
        console.log(mes)
        
    };
};

