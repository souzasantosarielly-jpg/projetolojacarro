function salvarCarros(event) {
    //impedir de recarregar a página
    event.preventDefault();

    let titulo = document.getElementById('title');
    let preco = document.getElementById('preco');
    let marca = document.getElementById('marca');
    let modelo = document.getElementById('modelo');

    let cambioSelecionado = document.querySelector('input[name="marcha"]:checked');

    let cambio = cambioSelecionado ? cambioSelecionado.id : "Não informado";

  
    let carro = {
        titulo,
        preco,
        marca,
        modelo, 
        cambio
    };

    let carros = JSON.parse(localStorage.getItem("carros")) || [];
    carros.push(carro);
    localStorage.setItem("carros", JSON.stringify(carros));

    adicionarnatela(carro);

    Document.querySelector("form").reset();

}

function adicionarnatela(carro) {
    let lista = document.getElementById('listadecarros')
    let card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
    <h3>${carro.titulo}</h3>
    <p><strong>preço:</strong> R$ ${carro.preco}</p>
    <p><strong>marca:</strong>  ${carro.marca}</p>
    <p><strong>modelo:</strong>  ${carro.modelo}</p>
    <p><strong>câmbio:</strong>  ${carro.cambio}</p>
    
`;

lista.appendChild(card);
    
}


