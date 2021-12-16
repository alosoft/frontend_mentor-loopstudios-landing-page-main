const menu_icon = document.querySelector(".nav__menu");
const mobile_menu = document.querySelector(".nav__links");


menu_icon.addEventListener("click", () => {
    if (mobile_menu.style.display === 'none' || mobile_menu.style.display === '') {
        mobile_menu.style.display = 'flex';
        menu_icon.src = 'images/icon-close.svg';
    } else {
        console.log(mobile_menu.style.display)
        mobile_menu.style.display = 'none';
        menu_icon.src = 'images/icon-hamburger.svg';
    }
})