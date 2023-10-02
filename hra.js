let currentPlayer = 'circle';

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

document.body.querySelector('button:nth-child(1)').addEventListener('click', change);
document.body.querySelector('button:nth-child(2)').addEventListener('click', change);
document.body.querySelector('button:nth-child(3)').addEventListener('click', change);
document.body.querySelector('button:nth-child(4)').addEventListener('click', change);
document.body.querySelector('button:nth-child(5)').addEventListener('click', change);
document.body.querySelector('button:nth-child(6)').addEventListener('click', change);
document.body.querySelector('button:nth-child(7)').addEventListener('click', change);
document.body.querySelector('button:nth-child(8)').addEventListener('click', change);
document.body.querySelector('button:nth-child(9)').addEventListener('click', change);
document.body.querySelector('button:nth-child(10)').addEventListener('click', change);