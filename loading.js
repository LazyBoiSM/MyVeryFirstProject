const loader = document.querySelectorAll(".loader");
const loaderContainer = document.querySelector(".loaderContainer");
const parent = document.querySelector(".parent");
let i = -1;
let intervalId;
let y = 0;
let currentLoadingId;
const preLoaderFunction = () => {
    const preLoader = document.getElementById(`${currentLoadingId}`);
        if (preLoader.classList.contains("current")) {
            preLoader.classList.remove("current");
            preLoader.style.transform = "scale(1)";
    }
}

const loaderFunction = () => {
    loaderContainer.style.opacity = "1";
    parent.style.opacity = "0.1";
    if (i  === loader.length -1) {
        i = -1;
        preLoaderFunction();
    }

    i += 1;
    if ( i > 0) {
        preLoaderFunction();
    }
    currentLoadingId = loader[i].id;
    loader[i].style.transform = "scale(1.5)";
    loader[i].classList.add("current");
    console.log(currentLoadingId);

    y += 1;
    if(y === 10) {
        y = 0;
        clearInterval(intervalId);
        loaderContainer.style.opacity = "0";
        parent.style.opacity = "1";
    }
}



window.addEventListener("load", () => {
    parent.style.opacity = "0.1";
    intervalId = setInterval(() => {
        loaderFunction();
    },200);
})



document.querySelector(".loginBtn").addEventListener("click", () => {
    intervalId = setInterval(() => {
        loaderFunction();
    },200);
});

