let btnOrdernarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdernarPorPreco.addEventListener('click', ordernarLivrosPorPreco)

function ordernarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => {
        return a.preco - b.preco
    })
    exibirOsLivrosNaTela(livrosOrdenados)
}