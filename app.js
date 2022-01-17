const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar__menu")


//Velo
const velo__catecory = document.querySelector("#velo__catecory")
const velo__catecories = document.querySelector(".velo__catecory")
const velo__ice = document.querySelector("#velo__ice")
const velo__tropical = document.querySelector("#velo__tropical")
const velo__catecories1 = () => {
  velo__catecory.classList.toggle("is-active")
  velo__ice.classList.toggle("is-active")
  velo__tropical.classList.toggle("is-active")
}
velo__catecory.addEventListener("click", velo__catecories1);

//seven
const seven__catecory = document.querySelector("#seven__catecory")
const seven__catecories = document.querySelector(".seven__catecory")
const seven__cherry = document.querySelector("#seven__cherry")
const seven__vannila = document.querySelector("#seven__vannila")
const seven__catecories1 = () => {
  seven__catecory.classList.toggle("is-active")
  seven__cherry.classList.toggle("is-active")
  seven__vannila.classList.toggle("is-active")
}
seven__catecory.addEventListener("click", seven__catecories1);


const mobileMenu = () => {
    menu.classList.toggle("is-active")
    menuLinks.classList.toggle("active")
}
menu.addEventListener("click", mobileMenu);