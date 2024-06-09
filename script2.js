const menu = ["HOME","SERVICES","ABOUT US","CONTACT US"];
const menuContainer = document.querySelector(".menuContainer");

for (i = 0; i < menu.length; i++) {
    const menuItem = `
    <div class="menuItem">${menu[i]}</div>
    `;
    menuContainer.innerHTML += menuItem;
}