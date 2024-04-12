const item = document.querySelector("#item")
const formulario = document.querySelector("#formulario")
const lista = document.querySelector("#lista")


function cadastrarItem(event){
    event.preventDefault()
    const item_adicionado = document.createElement("li")


    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    checkbox.addEventListener("click", (event)=>{
   if(event.target.checked === true){
       texto.style.textDecoration="line-through"
   }else{
    texto.style.textDecoration="none"
   }
    })

    const texto = document.createElement("span")
    texto.textContent = item.value


    const botao_excluir = document.createElement("button")
    botao_excluir.textContent = "Excluir"

    botao_excluir.addEventListener("click", ()=>{
        lista.removeChild(item_adicionado)
    })


    item_adicionado.appendChild(checkbox)
    item_adicionado.appendChild(texto)
    item_adicionado.appendChild(botao_excluir)

    lista.appendChild(item_adicionado)
    item.value = ""
    item.focus()
}



formulario.addEventListener("submit", cadastrarItem)