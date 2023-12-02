
const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('#btn-get')
const modalClose = document.querySelector('.modal_close')


const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

setTimeout(openModal,10000)

modalBtn.onclick = () => openModal()
modalClose.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}

const scrollCheck = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 1) {
    openModal()
    window.removeEventListener("scroll", scrollCheck)
}
}
window.addEventListener("scroll", scrollCheck)