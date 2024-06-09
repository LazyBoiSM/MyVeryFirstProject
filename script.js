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
  toastAlert.style.transform =  `translateY(20px)`;
  setTimeout(() => {
    toastAlert.style.transform = `translateY(${-(toastAlert.offsetHeight)-20}px)`
  }, 3000)
}

clipboard1.addEventListener("click", () => {
    toastAlert.textContent = "copied text!"
    copyFunction(copyText1);
    toastAlertFunction();
})
clipboard2.addEventListener("click", () => {
    toastAlert.textContent = "copied text!"
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

// valitation

const userNameDiv = document.querySelector(".userNameValitate");
const passwordDiv = document.querySelector(".passwordValitate");
const loginBtn = document.querySelector(".loginBtn");
const page1 = document.querySelector(".page1");

const valitation = () => {
  if(userNameDiv.value === "lazyboi" && passwordDiv.value === "hellolazyboies2001") {
    toastAlert.textContent = "login success!"
    toastAlertFunction();
    page1.click();
  }else {
    toastAlert.textContent = "invalid credential!"
    toastAlertFunction();
  }
}

loginBtn.addEventListener("click", () => {
  intervalId = setInterval(() => {
    loaderFunction();
  },  200)
  setTimeout(() => {
    valitation();
  }, 2000)
});


//aboutUs

const aboutUsDiv = document.querySelector(".aboutUsContainer");

const aboutUsTitle = `<div class="aboutUsText col-12 col-md-12 col-lg-6">
  <h5> The Most Powerful Way to Connect with Every Audience.<h5>
  <h6>
    Whether you want to motivate or train team members,
    sell products or services, or entertain and inform
    subscribers, video does it best. And Brightcove provides
    you with the most reliable, scalable, and secure platform
    to deliver it on. Since 2004, our technology has helped 
    customers all over the world harness the incredible power 
    of video we have even won two Technology and Engineering Emmy Awards for it.
  </h6>
  </div>`;

const aboutUsTitle2 = `
<div class="aboutUsText col-12 col-md-12 col-lg-6">
  <h5> The Most Powerful Way to Connect with Every Audience.<h5>
  <h6>
    Whether you want to motivate or train team members,
    sell products or services, or entertain and inform
    subscribers, video does it best. And Brightcove provides
    you with the most reliable, scalable, and secure platform
    to deliver it on. Since 2004, our technology has helped 
    customers all over the world harness the incredible power 
    of video we have even won two Technology and Engineering Emmy Awards for it.
  </h6>
  </div>`;

aboutUsDiv.innerHTML += aboutUsTitle + aboutUsTitle2;