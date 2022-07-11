function botao () {
    var getBotao = document.querySelector('#card__btn'),
    getBox = document.querySelector('#card__color');

    getBotao.addEventListener('click', function (e) {
        e.preventDefault();

        function random(numero) {
            return Math.floor(Math.random()*(numero+1));
        }

        var randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';

        getBox.style.backgroundColor = randomColor;

    })
}

botao();