const productsEspanha = [
    {   
        Id: 0,
        Nome: 'Camisa Barcelona',
        Ano: '2020/2021',
        Imagem: './imagens/barcelona.jpg',
        Preço: 129.9,
        Quantidade: 0
    },
    {
        Id: 1,
        Nome: 'Camisa Celta de Vigo',
        Ano: '2020/2021',
        Imagem: './imagens/celtadevigo.jpg',
        Preço: 129.9,
        Quantidade: 0
        
    },
    {   
        Id: 2,
        Nome: 'Camisa Real Madrid',
        Ano: '2020/2021',
        Imagem: './imagens/realmadrid.jpg',
        Preço: 149.9,
        Quantidade: 0
    },
    {   
        Id: 3,
        Nome: 'Camisa Atlético de Madrid',
        Ano: '2020/2021',
        Imagem: './imagens/atlmadrid.jpg',
        Preço: 229.9,
        Quantidade: 0
    }
]

function addEspanha() {
    const produtos = document.getElementById('products')

    for (let i = 0; i < productsEspanha.length; i++) {

    const imagem =  productsEspanha[i].Imagem
    const nome = productsEspanha[i].Nome
    const preço = productsEspanha[i].Preço
    const ano = productsEspanha[i].Ano
    const id = productsEspanha[i].Id

        produtos.innerHTML +=
            `
    <div class="box-product">
        <img src="${imagem}" alt="" class="img-product">
        <p class="text-box">${nome}</p>
        <p class="text-box">${ano}</p>
        <p class="price" id="price">R$ ${preço}0<p>
        <button class="btn-add-cart" onclick="addItemOnCart('${id}','${imagem}', '${nome}', '${ano}', ${preço})">Adicione ao carrinho!</button>
    </div>
`
    }

}

addEspanha();
addButtonTotalPrice()


// ADD AO CARRINHO 

let arrayCart = []

function addItemOnCart (id, imagem ,nome, ano, preço) {
   let listCart = document.getElementById('list-cart')

   console.log(imagem, ano, nome, preço)

    listCart.innerHTML += `
    <li class="item-cart">
    <img src="${imagem}" alt="" class="img-product">
    <p class="text-box">${nome} ${ano}</p>
    <p class="price">R$ ${preço}0<p>
    </li> `
    
    let product = {
        Id: id,
        Nome: nome,
        Ano: ano,
        Imagem: imagem,
        Preço: preço
    }

    arrayCart.push(product)
    calculateTotal()

} 

// CALCULATE TOTAL

function calculateTotal () {

    let setTotal = document.getElementById('cart-price');

    let total = 0 
    let discount = 0

    arrayCart.forEach ( (product, index) => {
        total += product.Preço
    })

    if (arrayCart.length > 2) {
        total = total - total * 40/ 100

        discount = total * 40/100
        
    }
    

    setTotal.innerHTML = `R$ ${total.toFixed(1)}0`

    let divTotalPrice = document.getElementById('total-price')

    divTotalPrice.innerHTML = `
    <p class="total-price-text">TOTAL: <span id="cart-price">R$ ${total.toFixed(1)}0</span></p>
    <p class="total-price-text">DESCONTO: <span id="cart-discount">R$ ${discount.toFixed(1)}0</span></p>
    <a href="https://picpay.me/joao.lima1522/${total.toFixed(1)}" target="_blank"><button class="btn btn-cart">PAGAR</button></a>
    `
} 




// ADD BUTTON TOTAL PRICE

function addButtonTotalPrice() {
    let divTotalPrice = document.getElementById('total-price')

    divTotalPrice.innerHTML = `
    <p class="total-price-text">TOTAL: <span id="cart-price">R$00,00</span></p>
    <p class="total-price-text">DESCONTO: <span id="cart-discount">R$00,00</span></p>
    <a href="https://picpay.me/joao.lima1522/20.0" target="_blank"><button class="btn btn-cart">PAGAR</button></a>
    `

}




// JAVASCRIPT + CSS
var icon = document.querySelector(".icon-cart-shopping"); 
var x = document.querySelector(".x");

icon.addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("show-menu");
    document.querySelector(".icon").classList.toggle("show-menu");
    document.querySelector(".sidebar-texts").classList.toggle("show-menu");
    document.querySelector(".text-cart").classList.toggle("show-menu");
}); 

x.addEventListener("click", function(){
    document.querySelector('.sidebar').classList.toggle('show-menu');
})

console.log(productsEspanha.findIndex)
