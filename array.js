// IMPORTS //

import { itemsSpain } from './items/spain.js'
import { itemsFrance } from './items/france.js' 

function spain() {
    let products = document.getElementById('products')

    itemsSpain.map((val) => {
            products.innerHTML += `
            <div class="box-product">
                <img src="`+val.Imagem+`">
                <p class="text-box">`+val.Nome+`</p>
                <p class="price">`+val.Preço+`</p>
                <a key="`+val.Id+`" href="#">Adicionar ao carrinho!<a/>
            </div>`
    })

}

let buttonSpain = document.getElementById('button-spain')
buttonSpain.addEventListener("click", spain())

function france() {
    let products = document.getElementById('products')

    itemsFrance.map((val) => {
            products.innerHTML += `
            <div class="box-product">
                <img src="`+val.Imagem+`">
                <p class="text-box">`+val.Nome+`</p>
                <p class="price">`+val.Preço+`</p>
                <a key="`+val.Id+`" href="#">Adicionar ao carrinho!<a/>
            </div>`
    })

}

let buttonFrance = document.getElementById('button-france')
buttonFrance.addEventListener("click", france())

console.log(itemsSpain);
console.log(itemsFrance);


