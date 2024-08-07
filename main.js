const elPokemonList = document.querySelector(".pokemon-list")

var selectPoke = pokemons.slice(0, 60)


for (var obj of selectPoke) {
    var newItem = document.createElement("li")
    newItem.classList.add("pokemon-card")
    var newId = document.createElement("p")
    var newImg = document.createElement("img")
    var newTitle = document.createElement("h3")
    var newType = document.createElement("div")
    newType.classList.add("type")

    newId.textContent = obj.id;
    newImg.src = obj.img;
    newImg.alt = obj.name + " pokkkeee";
    newTitle.textContent = obj.name
    newType.textContent = obj.type.join(" ")


    newItem.append(newId, newImg, newTitle, newType)
    elPokemonList.appendChild(newItem)
}
