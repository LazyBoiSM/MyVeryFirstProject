const clipboard1 = document.querySelector(".clipboard1");
const clipboard2 = document.querySelector(".clipboard2");
const copyText1 = document.getElementById("copy1");
const copyText2 = document.getElementById("copy2");

// copy function
const copyFunction = (copyText) => {
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}

const toastAlert = document.querySelector(".toastAlert");


// toast alert function
const toastAlertFunction = () => {
  toastAlert.style.transform =  `translateY(0px)`;
  setTimeout(() => {
    toastAlert.style.transform = `translateY(${-(toastAlert.offsetHeight)}px)`
  }, 3000)
}

clipboard1.addEventListener("click", () => {
    copyFunction(copyText1);
    toastAlertFunction();
})
clipboard2.addEventListener("click", () => {
    copyFunction(copyText2);
    toastAlertFunction();
})


// cokkie function
const cookie = document.querySelector(".cookie");

document.querySelector(".cookieDecline").addEventListener("click", () => {
  cookie.style.opacity = "0";
})

document.querySelector(".cookieAccept").addEventListener("click", () => {
  localStorage.setItem("accepted" , 1)
  cookie.style.opacity = "0";
})

addEventListener("load", () => {
  setTimeout(() => {
    localStorageFunction();
  }, 3000)
})

const localStorageFunction = () => {
  if(localStorage.getItem("accepted") == 1) {
    return;
  } else {
    cookie.style.opacity = "1";
    parent.style.opavity = "0.1";
  }
}





