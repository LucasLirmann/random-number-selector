function raffle() {
    let quantity = parseInt(document.getElementById('quantity').value);
    let from = parseInt(document.getElementById('from').value);
    let to = parseInt(document.getElementById('to').value);

    let drawnNumbers = [];
    let number;

    for (let index = 0 ; index < quantity; index++) {
        number = getRandomNumber(from, to);
        while (drawnNumbers.includes(number)) {
            number = getRandomNumber(from, to);
        }
        drawnNumbers.push(number);
    }

    let result = document.getElementById('result');
    result.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${drawnNumbers}</label>` 
    changeButtonState();   
}

function getRandomNumber(from, to){
    return Math.floor(Math.random() * (to - from + 1) ) + from;
}

function changeButtonState() {
    let resetButton = document.getElementById('reset-button');
    if (resetButton.classList.contains('container__botao-desabilitado')) {
        resetButton.classList.remove('container__botao-desabilitado');
        resetButton.classList.add('container__botao');
    }  else {
        resetButton.classList.remove('container__botao');
        resetButton.classList.add('container__botao-desabilitado');
    }
}

function reset() {
    document.getElementById('quantity').value = '';
    document.getElementById('from').value = ''; 
    document.getElementById('to').value = '';
    document.getElementById('result').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    changeButtonState();
}
