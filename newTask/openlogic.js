const popupMenu = document.querySelector('.custom-menu__popup-menu')
const eventPopupMenu = document.querySelector('.custom-menu__item-show')

eventPopupMenu.addEventListener('click', (event) => {
    event.preventDefault()
    const state = document.querySelector('.custom-menu__popup-menu--show')  
    !state ? popupMenu.classList.add('custom-menu__popup-menu--show') :
    popupMenu.classList.remove('custom-menu__popup-menu--show')
})
