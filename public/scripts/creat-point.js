function populateUFs () {
  const ufSelect = document.querySelector("[name=uf]")
  
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {

    for( const state of states ) {
    ufSelect.innerHTML +=`<option value="${state.id}">${state.nome}</option>`
    }
  })

}

populateUFs() 

function getCities (event) {
  const citySelect = document.querySelector("[name=city]")
  const stateInput = document.querySelector("[name=state]")

  const ufValue = event.target.value

  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

  citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
  citySelect.disabled = false

  fetch(url)
  .then( res => res.json() )
  .then( cities => {
    
    for( const city of cities ) {
    citySelect.innerHTML +=`<option value="${city.nome}">${city.nome}</option>`
    }

    citySelect.disabled = false
  })

}

document
  .querySelector("[name=uf]")
  .addEventListener("change", getCities)



  //itens de coleta 

  const itemsToCollect = document.querySelectorAll(".items-grid li")

  for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
  }

  const collectedItems = document.querySelector("input[name=items]")

  let selectedItems = []

  function handleSelectedItem(event) {
    const itemLi = event.target

    //add ou remove class com js
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    //verificar se existem itens selecionados, se sim pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex( item => {
      const itemFound = item == itemId
      return itemFound
    })

    //se ja estiver selecionados
    if( alreadySelected >= 0 ) {
      //tirar elemento da seçao
      const filteredItems = selectedItems.filter( item => {
        const itemIsDifferent = item != itemId 
          return itemIsDifferent 
        
      })
      selectedItems = filteredItems
  
    } else {
      //se nao, add à seleçao
      selectedItems.push(itemId)
    }

    //refresh do campo escondido com os items selecionados
    collectedItems.value = selectedItems

}