const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const buttonClose = document.querySelector("#modal .header a")

buttonSearch.addEventListener('click', openMOdal)


buttonClose.addEventListener('click', cloceModal)

function openModal(){
  modal.classList.remove('hide')
  
}

function closeModal(){
  modal.classList.add('hide')
}