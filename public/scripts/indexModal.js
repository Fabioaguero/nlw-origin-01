const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const buttonClose = document.querySelector("#modal .header a")

buttonSearch.addEventListener('click', openModal)


buttonClose.addEventListener('click', closeModal)

function openModal(){
  modal.classList.remove('hide')
  
}

function closeModal(){
  modal.classList.add('hide')
}