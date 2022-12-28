const btnMenu = document.querySelector(".menu") 
const btnImg = document.querySelector(".menu img") 
const sideMenu = document.querySelector(".menu-lateral")
const sideMenuClose = document.querySelector(".menu-lateral img")

const open = () => {
    btnImg.src = "."
    sideMenu.classList.add("active")
}
const close = () => {
    btnImg.src = "./assets/images/icon-menu.svg";
    sideMenu.classList.remove("active");
    console.log("opa")
}

btnMenu.addEventListener("click",open)
sideMenuClose.addEventListener("click",close)