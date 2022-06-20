const clickArea = document.getElementById('game_area');
let whoseTurn = 0;
let whoWin = '';
let numberToWin = 0;
let rowsNumber = 0;
let winnerPopup = document.getElementById('popup');
let winnerMessage = document.querySelector('.popup_text');
let drawMessage = document.querySelector('.popup_title');
let refreshField = document.querySelector('.popup_close');


clickArea.addEventListener('click', event => {
    
    if(event.target.className === 'cell') {
         if (event.target.innerHTML != ''){
             alert('Chose another cell!')
        } else {
             whoseTurn % 2 === 0 ? event.target.innerHTML = 'x' : event.target.innerHTML = '0';
             whoseTurn ++;
             setTimeout(checkWinner, 100)
        }
        
    }
})

let create = document.getElementById('create');

create.onclick = function() {
    whoseTurn = 0
    
    clickArea.innerHTML = ''
    rowsNumber = parseInt(document.querySelector(".rows").value);
    numberToWin = parseInt(document.querySelector("#number_to_win").value)
    
    for (let i = 0; i < rowsNumber; i++) {
        for(let j = 0; j < rowsNumber; j++){
            let id = '' + i + j
            clickArea.innerHTML +='<div class="cell" id="' + id + '"></div>';
        }    
    }
    let areaWidth = rowsNumber * 70 + 'px';
    clickArea.style.width = areaWidth;
}

function checkWinner(){
    checkHorizont()
    checkVertical()
    checkDiagLeft()
    checkDiagRight()
    chekDraw()

}
function message(startPoint) {
    winnerPopup.style.visibility = "visible"
    winnerPopup.style.opacity = "1"
    winnerMessage.textContent = 'Выиграли ' + startPoint + '-ки!'
    refreshField.onclick = () => clickArea.innerHTML = ''
}

function checkHorizont(){
    for (let i = 0; i < rowsNumber; i ++){
        let counter = 0
        let startPoint = ''
        for (let j = 0; j < rowsNumber; j++){
            if(document.getElementById('' + i + j).innerHTML === ''){
                counter = 0;
            } else {
                if (document.getElementById('' + i + j).innerHTML === startPoint){
                    counter++;
                } else {
                    counter = 1;
                    startPoint = document.getElementById('' + i + j).innerHTML
                }
                if (counter === numberToWin){
                    message(startPoint);
                }  
            }
        }
    }
}

function checkVertical(){
    for (let j = 0; j < rowsNumber; j ++){
        let counter = 0
        let startPoint = ''
        for (let i = 0; i < rowsNumber; i++){
            if(document.getElementById('' + i + j).innerHTML === ''){
                counter = 0;
            } else {
                if (document.getElementById('' + i + j).innerHTML === startPoint){
                    counter++;
                } else {
                    counter = 1;
                    startPoint = document.getElementById('' + i + j).innerHTML
                }
                if (counter === numberToWin){
                    message(startPoint);
                }  
            }
        }
    }
}

function checkDiagLeft(){
    for (let j = 0; j < rowsNumber; j++){
        let counter = 0
        let startPoint = ''
        for (let x = 0; x < rowsNumber; x++){
            if(document.getElementById('' + (x) + (j+x)) === null){
                break;
            }
            if(document.getElementById('' + (x) + (j+x)).innerHTML === ''){
                counter = 0;
            } else {
                if (document.getElementById('' + (x) + (j+x)).innerHTML === startPoint){
                    counter++;
                } else {
                    counter = 1;
                    startPoint = document.getElementById('' + (x ) + (j+x)).innerHTML
                }
                if (counter === numberToWin){
                    message(startPoint);
                }
            }
        }
    }

    for (let i = 0; i < rowsNumber; i++){
        let counter = 0
        let startPoint = ''
        for (let x = 0; x < rowsNumber; x++){
            if(document.getElementById('' + (i + x) + (x)) === null){
                break;
            }
            if(document.getElementById('' + (i + x) + (x)).innerHTML === ''){
                counter = 0;
            } else {
                if (document.getElementById('' + (i + x) + (x)).innerHTML === startPoint){
                    counter++;
                } else {
                    counter = 1;
                    startPoint = document.getElementById('' + (i + x ) + (x)).innerHTML
                }
                if (counter === numberToWin){
                    message(startPoint);
                }
            }
        }
    }
}

function checkDiagRight(){
    for (let j = 0; j < rowsNumber; j++){
        let counter = 0
        let startPoint = ''
        for (let x = 0; x < rowsNumber; x++){
            if(document.getElementById('' + (rowsNumber - 1 - x) + (j+x)) === null){
                break;
            }
            if(document.getElementById('' + (rowsNumber - 1 - x) + (j+x)).innerHTML === ''){
                counter = 0;
            } else {
                if (document.getElementById('' + (rowsNumber - 1 - x) + (j+x)).innerHTML === startPoint){
                    counter++;
                } else {
                    counter = 1;
                    startPoint = document.getElementById('' + (rowsNumber - 1 - x) + (j+x)).innerHTML
                }
                if (counter === numberToWin){
                    message(startPoint);
                }
            }
        }
    }

    for (let i = rowsNumber - 1; i>=0; i--){
        let counter = 0
        let startPoint = ''
        for (let x = 0; x < rowsNumber; x++){
            if(document.getElementById('' + (i - x) + (x)) === null){
                break;
            }
            if(document.getElementById('' + (i - x) + (x)).innerHTML === ''){
                counter = 0;
            } else {
                if (document.getElementById('' + (i - x) + (x)).innerHTML === startPoint){
                    counter++;
                } else {
                    counter = 1;
                    startPoint = document.getElementById('' + (i - x) + (x)).innerHTML
                }
                if (counter === numberToWin){
                    message(startPoint);
                }
            }
        }
    }
}

function chekDraw() {
    let empty = false
    for (let i = 0; i < rowsNumber; i ++){
        for (let j = 0; j < rowsNumber; j ++){
            if (document.getElementById('' + i + j).innerHTML === '') {
                empty = true;
            }
        }
    }
    if (empty === false) {
        winnerPopup.style.visibility = "visible"
        winnerPopup.style.opacity = "1"
        drawMessage.textContent = 'Вот это поворот:'
        winnerMessage.textContent = 'Ничья! Попробуйте снова!!'
        refreshField.onclick = () => clickArea.innerHTML = ''
    }
}