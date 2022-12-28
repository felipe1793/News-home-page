const btnMenu = document.querySelector(".menu") //pegando o botão para fazer o evento
const btnImg = document.querySelector(".menu img") //Pegando a imagem para alteração
const sideMenu = document.querySelector(".menu-close") //

const open = () => {
    if(btnImg.src.indexOf("icon-menu-close.svg") == -1){
        btnImg.src = "/assets/images/icon-menu-close.svg"
        sideMenu.classList.remove("menu-close")
        sideMenu.classList.add("menu-flex")
    }else {
        btnImg.src = "/assets/images/icon-menu.svg";
        sideMenu.classList.remove("menu-flex")
        sideMenu.classList.add("menu-close")
    }
    // btnMenu.innerHTML = "<div class=menu-flex <img src=./assets/images/icon-menu-close.svg> <ol>   <li>Home</li> <li>New</li> <li>Popular</li> <li>Trending</li> <li>Categories</li> </ol> </div>"
    // for( i=0,)
    console.log(btnImg.src)
}

btnMenu.addEventListener("click",open)