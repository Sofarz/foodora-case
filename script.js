const btnContainer = document.getElementById('order-online-button-container')
const showMenuBtn = document.getElementById('show-menu-btn')
const burgerMenu = document.getElementById('burger-menu')
const closeMenu = document.getElementById('close-menu')

showMenuBtn.addEventListener('click', () => {
    burgerMenu.classList.add('burger-menu-selected')
    burgerMenu.classList.remove('close-menu')
    btnContainer.classList.add('hide-order-online-btn')
})

closeMenu.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu-selected')
    burgerMenu.classList.add('close-menu')
    btnContainer.classList.remove('hide-order-online-btn')
})