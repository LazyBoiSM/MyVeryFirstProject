const parent = document.querySelector(".parent");
const tabMenu = document.querySelector(".tabMenu");
const slider = document.querySelector(".slider");
const showingPage = document.createElement("h1");
const parentContainer = document.querySelector(".parentContainer")
const logoutBtn = document.querySelector(".logoutBtn");
const aTag = document.getElementsByTagName("a")[0];
parent.append(showingPage);

const menuText = ["HOME" ,"PRODUCTS", "SERVICES","ABOUT US","PROFILE"];

logoutBtn.addEventListener("click", () => {
    aTag.click();
})
 
for (let i = 0; i < menuText.length; i++) {
    const menuItem = document.createElement("div");
    menuItem.id = i;
    menuItem.classList.add("menuItem");
    menuItem.textContent = menuText[i];
    tabMenu.append(menuItem);

    const showingPageFunction = () => {
        showingPage.textContent = `This is our ${menuText[menuItem.id]} page..`;
        showingPage.classList.add("showingPage");
    }

    const sliderFunction = () => {
        slider.style.width = menuItem.offsetWidth + "px";
        slider.style.transform = `translateX(${menuItem.offsetLeft}px)`;
    }
    
    if(i === 0) {
        sliderFunction();
        showingPageFunction();
    }

    menuItem.addEventListener("click", () => {
        sliderFunction();
        if(showingPage.classList.contains("showingPage")) {
            showingPage.classList.remove("showingPage");
            showingPageFunction();
        } else {
            showingPageFunction();
        }  
    })
}


