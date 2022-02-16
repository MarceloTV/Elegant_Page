const menu_btn = document.getElementById("menu_btn");
const menu = document.getElementById("menu");
const close_btn = document.getElementById("close");

menu_btn.onclick = (e) => {
    menu.classList.remove("close");
    menu.classList.add("show");
};
close_btn.onclick = (e) => {
    menu.classList.remove("show");
    menu.classList.add("close");
};
