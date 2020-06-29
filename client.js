
const axios = require('axios');

// Lista cardápio
const listaCardapio = () => {

  axios.get('https://rafaelsapi.herokuapp.com/cardapio')
    .then(function (response) {
      const cardapio = response.data;

      console.log(cardapio);

      // const primeiroCarro = listaDeCarros[0];
      // console.log("Primeiro carro: " + primeiroCarro.modelo + ", da marca " + primeiroCarro.marca + " da cor " + primeiroCarro.cor);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      console.log("Execução concluída!");
    });
}
//listaCardapio()

// Cadastra novo item no cardápio
const cadastrarNovoItem = () => {
  axios.post('https://rafaelsapi.herokuapp.com/novoItem', {
    categoria: 'burgers',
    item: `Rafael's X Burger`,
    preco: '27.90',
  })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

}
//cadastrarNovoItem()


// Exclui item do cardápio
const excluirItem = () => {
  axios.delete('https://rafaelsapi.herokuapp.com/deleteItem', {

    data:
    {
      categoria: 'burgers',
      id: 1
    }

  });
}

//excluirItem();

// Cadastrar novo item no carrinho para montar pedido
const cadastrarNovoItemCarrinho = () => {
  axios.post('https://rafaelsapi.herokuapp.com/novoItemCarrinho', {
    categoria: 'burgers',
    id: '2',
  })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

}
//cadastrarNovoItemCarrinho()


// Lista itens do carrinho e preço final da compra  para confirmar a compra e solicitar a entrega
const solicitarEntrega = () => {

  axios.get('https://rafaelsapi.herokuapp.com/carrinho')
    .then(function (response) {
      const cardapio = response.data;

      console.log(cardapio);

      // const primeiroCarro = listaDeCarros[0];
      // console.log("Primeiro carro: " + primeiroCarro.modelo + ", da marca " + primeiroCarro.marca + " da cor " + primeiroCarro.cor);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      console.log("Execução concluída!");
    });
}
//solicitarEntrega()

//---- Bônus ----
// Lista cardápio por categoria
const listaCardapioCategoria = () => {

  axios.get('https://rafaelsapi.herokuapp.com/cardapio/burgers')
    // Lista a outra categoria
    //axios.get('https://rafaelsapi.herokuapp.com/cardapio/macarronadas')
    .then(function (response) {
      const cardapio = response.data;

      console.log(cardapio);

      // const primeiroCarro = listaDeCarros[0];
      // console.log("Primeiro carro: " + primeiroCarro.modelo + ", da marca " + primeiroCarro.marca + " da cor " + primeiroCarro.cor);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      console.log("Execução concluída!");
    });
}
//listaCardapioCategoria()

