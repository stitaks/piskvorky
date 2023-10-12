import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

const whoIsWinner = () => {
    const poleWinner =[];
    document.body.querySelectorAll('.game__box').forEach((button) => {
        if (button.classList.contains('board__field--cross')){
            poleWinner.push('x');
        }
        else if(button.classList.contains('board__field--circle')){
            poleWinner.push('o');
        }
        else{
            poleWinner.push('_');
        }
    })
    return findWinner(poleWinner);
}

const change = (event) => {
    if (currentPlayer === 'cross') {
        event.target.className += ' board__field--cross';
        currentPlayer = 'circle';
        event.target.disabled = true;
        document.body.querySelector('.game__image').src = 'img/circle.svg';
        
    }
    else {
        event.target.className += ' board__field--circle';
        currentPlayer = 'cross';
        event.target.disabled = true;
        document.body.querySelector('.game__image').src = 'img/cross.svg';
    }
const vitez = whoIsWinner();
    if (vitez === 'o' || vitez === 'x') {
        const alertOX = () => {alert(`Vyhrál hráč se symbolem ${vitez}.`);
        location.reload();}
        setTimeout(alertOX, 250);
    }
    else if (vitez === 'tie'){
        const alertTIE = () => {alert('Hra skončila remízou.');
        location.reload();
        }
        setTimeout(alertTIE, 250);
    }
}

const restart = (event) =>  {
    const decide = confirm('Opravdu chceš hru restartovat?');
    if (!decide){
        event.preventDefault();
    }
}

const home = (event) =>  {
    const decide = confirm('Opravdu chceš přejít na domovskou stránku?');
    if (!decide){
        event.preventDefault();
    }
}

document.body.querySelector('.card_button--green').addEventListener('click', home);
document.body.querySelector('.card_button--blue').addEventListener('click', restart);

const buttons = document.body.querySelectorAll('.game__box');
buttons.forEach((button) => {
    button.addEventListener('click', change);
});