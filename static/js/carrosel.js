
document.querySelectorAll('.produto-carrossel').forEach(carrossel => {

    const imagens = carrossel.querySelectorAll('.carrossel-imagens img');

    const anterior = carrossel.querySelector('.anterior');
    const proxima = carrossel.querySelector('.proxima');

    let atual = 0;

    imagens[0].classList.add('ativa');


    proxima.addEventListener('click', () => {

        imagens[atual].classList.remove('ativa');

        atual++;

        if (atual >= imagens.length) {
            atual = 0;
        }

        imagens[atual].classList.add('ativa');

    });


    anterior.addEventListener('click', () => {

        imagens[atual].classList.remove('ativa');

        atual--;

        if (atual < 0) {
            atual = imagens.length - 1;
        }

        imagens[atual].classList.add('ativa');

    });

});
