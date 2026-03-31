const tombolDaftar = document.getElementById("button-daftar");
const logoBtnDaftar = document.getElementById("logo-btn-daftar");
const kontenDaftar = document.getElementById("konten-daftar");

tombolDaftar.addEventListener("click" , () => {
    logoBtnDaftar.classList.toggle("active");
    kontenDaftar.classList.toggle("active");
}); 

const BtnMenuMobile = document.getElementById("btn-menu-mobile");
const MenuMobile = document.getElementById("menu-mobile");
const LogoBtn = document.getElementById("logo-btn");

BtnMenuMobile.addEventListener("click" , () => {
    MenuMobile.classList.toggle("active");
    BtnMenuMobile.classList.toggle("active");
});