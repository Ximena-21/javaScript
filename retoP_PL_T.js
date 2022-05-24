const piedra = 'piedra'
const papel = 'papel'
const tijera = 'tijera'

function play(user,pc){
    
    if (user === pc) {
        console.log('Empataste');
    } else if (user === piedra && pc === papel) {
        console.log('Ganaste');
    } else if (user === piedra && pc === tijera) {
        console.log('Ganaste');
    } else if (user === tijera && pc === papel) {
        console.log('Ganaste');
    } else {
        console.log('perdiste');
    }
}





//con switch
const opt1 = 'piedra';
const opt2 = 'papel';
const opt3 = 'tijera';


function play(user,pc){
    
    switch(true){
        case (user === pc):
            console.log('Empataste');
            break;
        case (user === opt1 && pc === opt2):
            console.log('Ganaste');
            break;
        case (user === opt1 && pc === opt3):
            console.log('Ganaste');
            break;
        case (user === opt3 && pc === opt2):
            console.log('Ganaste');
            break;
        default:
            console.log('perdiste');
            break;
    }
}

play(opt1,opt1)

//>>
Empataste