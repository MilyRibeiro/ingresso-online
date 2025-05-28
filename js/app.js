function comprar() {
    let tipoDeIngresso = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    // alert(tipoDeIngresso.value);
    // alert(quantidade.value);

    // Verifica se o campo quantidade está preenchido e é um número positivo:
    if(isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida!');
        return;
    }

    if(tipoDeIngresso.value == 'pista') {
        comprarPista(quantidade);
    } else if(tipoDeIngresso.value == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
}

function comprarPista(qtd) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > quantidadePista) {
        alert('Quantidade indisponível para o tipo pista!');
    } else {
        quantidadePista = quantidadePista - qtd;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > quantidadeSuperior) {
        alert('Quantidade indisponível para o tipo cadeira superior!');
    } else {
        quantidadeSuperior = quantidadeSuperior - qtd;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > quantidadeInferior) {
        alert('Quantidade indisponível para o tipo cadeira inferior!');
    } else {
        quantidadeInferior = quantidadeInferior - qtd;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('Compra realizada com sucesso!');
    }
}
