const elList = document.querySelector(".card-title")
const elResult = document.querySelector(".card-text")
const elRow = document.querySelector(".row")
const elCol = document.querySelector(".col")
const elCard = document.querySelector(".card")

for (let pokemon of pokemons) {
    const newA = document.createElement("A")
    const newH5 = document.createElement("h5")
    const newDesc = document.createElement("p")
    const height = document.createElement("h4")
    const weight = document.createElement("h4")
    const newDiv1 = document.createElement("div")
    const newDiv2 = document.createElement("div")
    const newDiv3 = document.createElement("div")
    const newDiv4 = document.createElement("div")
    const newDiv5 =document.createElement("div")
    const newImg = document.createElement("img")
    const newHr = document.createElement("hr")

    newImg.setAttribute("src", `${pokemon.img}`)
    newDiv1.setAttribute("class", "col-4")
    newDiv2.setAttribute("class", "card")
    newDiv3.setAttribute("class", "card-body")
    newDiv4.setAttribute("class", "d-flex")
    weight.setAttribute("class", "ms-4")



    newH5.textContent = pokemon.name
    newDesc.textContent = pokemon.candy
    height.textContent = pokemon.height
    weight.textContent = pokemon.weight

    elRow.appendChild(newDiv1)
    newDiv1.appendChild(newDiv2)
    newDiv2.appendChild(newImg)
    newDiv2.appendChild(newHr)
    newDiv2.appendChild(newDiv3)
    newDiv3.appendChild(newDiv5)
    newDiv5.appendChild(newH5)
    newDiv5.appendChild(newDesc)
    newDiv3.appendChild(newDiv4)
    newDiv4.appendChild(height)
    newDiv4.appendChild(weight)
    
    
    




}