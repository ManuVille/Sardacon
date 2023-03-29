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

//mover elementos

const button = document.querySelector("#menu");
button.addEventListener("click", changeMultipleCSS);

function changeMultipleCSS(e) {
  // Defining all our CSS styles
  const myStyles = `
    margin-top: 45rem;
  `;
  const element = document.querySelector(".text__index");

  element.style.cssText = myStyles;
}

const button1 = document.querySelector("#btnMenu");
button1.addEventListener("click", changeMultipleCSS1);

function changeMultipleCSS1(e) {
  // Defining all our CSS styles
  const myStyles = `
    margin-top: 5rem;
  `;
  const element = document.querySelector(".text__index");

  element.style.cssText = myStyles;
}