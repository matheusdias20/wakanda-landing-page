const menuBars = document.getElementById("modal-menu-mobile")
const menuArrow = document.getElementById("menu-arrow")

function menuBarsNavigation() {
    for (let index = 0; index < menuBars.length; index++) {
        const menuBars = menuBars[index];
        
    }

    if(menuBars.className === 'modal-menu-mobile') {
        menuBars.className = 'modal-menu-mobile modal-menu-mobile--active'
    } else {
        menuBars.className = 'modal-menu-mobile'
    }
}

function removeModalHelp() {

    menuBars.classList.remove("modal-menu-mobile--active")
}