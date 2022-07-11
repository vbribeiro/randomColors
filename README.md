# RandomColors

## Esta aplicação consiste em: randomizar as cores de um box, através do click.

### Para isso, o JavaScript foi escrito dessa forma:

* Declarar a função para os eventos do botão:

~~~
function botao () {

}

botao ()
~~~

* Pegar as variáveis declaradas no html:

~~~
function botao () {
    var getBotao = document.querySelector('#card__btn'),
    getBox = document.querySelector('#card__color');
}

botao();
~~~

* Abrir o evento de click do botão e prevenir o evendo default:

~~~
function botao () {
    var getBotao = document.querySelector('#card__btn'),
    getBox = document.querySelector('#card__color');

    getBotao.addEventListener('click', function (e) {
        e.preventDefault();
    })
}

botao();
~~~

* Criar a função que vai gerar números randômicos:

~~~
function botao () {
    var getBotao = document.querySelector('#card__btn'),
    getBox = document.querySelector('#card__color');

    getBotao.addEventListener('click', function (e) {
        e.preventDefault();

        function random(numero) {
            return Math.floor(Math.random()*(numero+1));
        }
    })
}

botao();
~~~

* Alocar em uma variável o rgb gerado por números que a nossa função acima randomizou:

~~~
function botao () {
    var getBotao = document.querySelector('#card__btn'),
    getBox = document.querySelector('#card__color');

    getBotao.addEventListener('click', function (e) {
        e.preventDefault();

        function random(numero) {
            return Math.floor(Math.random()*(numero+1));
        }

        var randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    })
}

botao();
~~~

* E por fim, pegar a variável o box que declaramos no passo um, acessar o seu estilo e definir que o seu backgroundColor será o valor que geramos no **randomColor**:

~~~
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
~~~

## Para acesar:

https://random-colors-two.vercel.app/