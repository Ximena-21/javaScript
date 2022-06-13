const questions = {
    content: 'Responde esta pregunta??',
    options: [
       {id: 'a', valor:'respuesta a'},
       {id: 'b', valor:'respuesta b'},
       {id: 'c', valor:'respuesta c'},
       {id: 'd', valor:'respuesta d'},
    ],

    correctAnswer: 'd',
};

// console.log(questions.correctAnswer)

const container = document.querySelector('.container');


const contentQuestion = `
    <div class="question">${questions.content}</div>
    <div class="optionBox">
        <button class="option" id="a">${questions['options'][0].valor}</>
        <button class="option" id="b">${questions['options'][1].valor}</>
        <button class="option" id="c">${questions['options'][2].valor}</>
        <button class="option" id="d">${questions['options'][3].valor}</>
    </div>
`

container.innerHTML = contentQuestion

// const answer = container.querySelectorAll('.option'); //me devueleme como un htmlcollection y este aunque sea parecido en apariencia, no tienen sus mismas propiedadades

// //convertir este htmlCollection en una matriz(array)
// const answerArray = Array.from(answer);

    
const answer = container.querySelectorAll('.option');
const answerArray = Array.from(answer);

answerArray.forEach((option)=>{
    // console.log(option)

    option.addEventListener('click',evaluarBoton)

    })

function evaluarBoton (evento) {
        // console.log(evento.target.id)
    const fulanito = evento.target

    answerArray.forEach((element)=>{
        element.style.backgroundColor = "";
    });

    if (questions.correctAnswer == fulanito.id) {
        // console.log(fulanito.style.backgroundColor)
        fulanito.style.backgroundColor = "green";
    } else {
        // connsole.log('incorrecto')
        fulanito.style.backgroundColor = "red";
    }

};
             





