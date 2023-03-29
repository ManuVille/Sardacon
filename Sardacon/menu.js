//menu principal
const btnMenu = document.querySelector("#btnMenu");
const Menu = document.querySelector("#menu");
btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar")
});
//submenu
const subMenuBtn = document.querySelectorAll(".submenu-btn");
for(let i = 0; i < subMenuBtn.length; i++){//dependiendo del boton que presiona...
    subMenuBtn[i].addEventListener("click", function(){
        if(window.innerWidth < 1024){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;

            if(subMenu.classList.contains("desplegar")){
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
            } else {
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";
            }

        }
    });
}