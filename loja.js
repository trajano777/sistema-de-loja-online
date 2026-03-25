class produto {
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
        }
}

class carrinho{
    constructor(){
        this.produtos = []
    }
    adicionarproduto(produto){
        this.produto.push(produto)
    }
listarprodutos(){
    return this.produtos
}

calculartotal(){
    return this.produtos.reduce((total, p) => total + p.preco, 0)
}
}

class pagamento{

}

class pedido{

}

class cliente{

}

