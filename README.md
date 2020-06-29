# Rafael's API REST

## Disponível em https://rafaelsapi.herokuapp.com/

### Consultar cardápio 

- Consulte o menu utilizando o método GET 

> GET https://rafaelsapi.herokuapp.com/cardapio

### Faça seu pedido

- Faça um pedido e obtenha a soma total do carrinho através do método POST

> POST https://rafaelsapi.herokuapp.com/novoItemCarrinho

O POST deve enviar um JSON no mesmo formato do cardápio: 

    { categoria: {
        id:int
    }}
 ## Ferramentas ADMINISTRATIVAS
### Adicione um novo Item ao Cardápio

- Ferramenta administrativa aravés do metodo POST

> POST https://rafaelsapi.herokuapp.com/novoItem

POST no mesmo formato do JSON cardápio completo

    {categoria:{id:int,item:string,preco:int}}

### Remover Item do Cardápio

- Remova um Item através do método DELETE

> DELETE https://rafaelsapi.herokuapp.com/deleteItem

#### Faça os testes utilizando o POSTMAN ou outro app de Rquisições HTTP, ou o client.js com axios
