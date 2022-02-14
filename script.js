function addEspanha() {
    const produtos = document.getElementById('products')
    produtos.innerHTML = `
    <div class="box-product">
    <img src="./imagens/barcelona.jfif" alt="" class="img-product">
    <p class="text-box">Camisa Barcelona 2020/2021</p>
    <p class="price">R$ 199,90</p>
</div>
<div class="box-product" id="teste">
    <img src="./imagens/atlmadrid.jfif" alt="" class="img-product">
    <p class="text-box">Camisa Atlético de Madrid 2020/2021</p>
    <p class="price">R$ 199,90</p>
</div>
<div class="box-product">
    <img src="./imagens/celtadevigo.jpg" alt="" class="img-product">
    <p class="text-box">Camisa Celta de Vigo 2020/2021</p>
    <p class="price">R$ 199,90</p>
</div>
<div class="box-product">
    <img src="./imagens/realmadrid.jpg" alt="" class="img-product">
    <p class="text-box">Camisa Real Madrid 2020/2021</p>
    <p class="price">R$ 199,90</p>
</div> `

}

function addFranca() {
    const produtos = document.getElementById('products')
    produtos.innerHTML = ` 
    <div class="box-product">
    <img src="./imagens/lyon.jfif" alt="" class="img-product">
    <p class="text-box">Camisa Lyon 2020/2021</p>
    <p class="price" id="price">R$ 129,90<p>
    </div>
    <div class="box-product">
    <img src="./imagens/psg-first.jpg" alt="" class="img-product">
    <p class="text-box">Camisa PSG 1º 2020/2021</p>
    <p class="price" id="price">R$ 299,90<p>
    </div>
    <div class="box-product">
    <img src="./imagens/realmadrid.jpg" alt="" class="img-product">
    <p class="text-box">Camisa PSG Black 2019/2020</p>
    <p class="price" id="price">R$ 199,90<p>
    </div>
    <div class="box-product">
    <img src="./imagens/oll.jfif" alt="" class="img-product">
    <p class="text-box">Camisa Ollympique de Marséille 2020/2021</p>
    <p class="price" id="price">R$ 99,90<p>
    </div> `
    console.log(preco)
}

function addBrasil() {
    const produtos = document.getElementById('products')
    produtos.innerHTML = ` 
    <div class="box-product">
    <img src="./imagens/flamengo.jfif" alt="" class="img-product">
    <p class="text-box">Camisa Flamengo 2020/2021</p>
    <p class="price" id="price">R$ 129,90<p>
    </div>
    <div class="box-product">
    <img src="./imagens/sport-white.jfif" alt="" class="img-product">
    <p class="text-box">Camisa Sport White 2020/2021</p>
    <p class="price" id="price">R$ 149,90<p>
    </div>
    <div class="box-product">
    <img src="./imagens/palmeiras-white.jfif" alt="" class="img-product">
    <p class="text-box">Camisa Palmeiras White 2019/2020</p>
    <p class="price" id="price">R$ 199,90<p>
    </div>
    <div class="box-product">
    <img src="./imagens/vasco-white.jfif" alt="" class="img-product">
    <p class="text-box">Camisa Vasco White 2020/2021</p>
    <p class="price" id="price">R$ 99,90<p>
    </div> `
    console.log(preco)
}

/* const productsEspanha = [
    {
        Nome: 'Camisa Barcelona 2020/2021',
        Imagem: './imagens/barcelona.jfif',
        Preço: 'R$ 199,90'
    },
    {
        Nome: 'Camisa Celta de Vigo 2020/2021',
        Imagem: './imagens/celtadevigo.jpg',
        Preço: 'R$ 129,99'
    },
    {
        Nome: 'Camisa Real Madrid 2020/2021',
        Imagem: './imagens/realmadrid.jpg',
        Preço: 'R$ 199,90'
    },
    {
        Nome: 'Camisa Atlético de Madrid 2020/2021',
        Imagem: './imagens/atlmadrid.jfif',
        Preço: 'R$ 299,90'
    }
]



const takeNomes = productsEspanha.map( (nome) => {
    console.log(`${nome.Nome}`)
    return
})
console.log(takeNomes) */