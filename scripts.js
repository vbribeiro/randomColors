function botao () {
    let getBotao = document.querySelector('#card__btn'),
    getBox = document.querySelector('#card__color');

    getBotao.addEventListener('click', function (e) {
        e.preventDefault();

        console.log("Oi");

        function colorRand() {
            var r = Math.random() * 255;
            var g = Math.random() * 255;
            var b = Math.random() * 255;

            return r + g + b;
        }

        getBox.style.backgroundColor = colorRand();

    })
}

botao();