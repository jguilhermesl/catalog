const productsEspanha = [
    {
        Nome: 'Camisa Barcelona',
        Ano: '2020/2021',
        Imagem: './imagens/barcelona.jfif',
        Preço: 'R$ 199,90',
        Quantidade: 0
    },
    {
        Nome: 'Camisa Celta de Vigo',
        Ano: '2020/2021',
        Imagem: './imagens/celtadevigo.jpg',
        Preço: 'R$ 129,99',
        Quantidade: 0
        
    },
    {
        Nome: 'Camisa Real Madrid',
        Ano: '2020/2021',
        Imagem: './imagens/realmadrid.jpg',
        Preço: 'R$ 199,90',
        Quantidade: 0
    },
    {
        Nome: 'Camisa Atlético de Madrid',
        Ano: '2020/2021',
        Imagem: './imagens/atlmadrid.jfif',
        Preço: 'R$ 299,90',
        Quantidade: 0
    }
]

function addEspanha() {
    const produtos = document.getElementById('products')

    for (let i = 0; i < productsEspanha.length; i++) {
        produtos.innerHTML +=
            `
    <div class="box-product">
        <img src="`+ productsEspanha[i].Imagem + `" alt="" class="img-product">
        <p class="text-box">`+ productsEspanha[i].Nome + `</p>
        <p class="text-box">`+ productsEspanha[i].Ano + `</p>
        <p class="price" id="price">`+ productsEspanha[i].Preço + `<p>
        <p class="shopping-cart">Adicione ao carrinho:</p>
        <div class="amount">
            <a><i class="fas fa-minus"></i></a>
            <p>0</p>
            <a><i class="fas fa-plus"></i></a>
        </div>
    </div>
`
    }
    return false
}