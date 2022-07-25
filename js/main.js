let popapPageLink = document.querySelector(".templates .popap .info a.previwe")
let popapGithubCode = document.querySelector(".templates .popap .info a.github")
let boxContent = document.querySelectorAll(".templates .box-contnet");
let popaptitle = document.querySelector(".templates .popap .info .special-hedding h2");
let popapP = document.querySelector(".templates .popap .info .special-hedding p");
let popapTlink = document.querySelector(".templates .popap .info a.template");
let popapIcon = document.querySelector(".templates .popap .info .icon");
let links = document.querySelectorAll(".templates .content .box span");
let popap = document.querySelector(".templates .popap");
let settingIcon = document.querySelector("body .setting-icon");
let setting = document.querySelector("body .setting");
let colors = document.querySelectorAll(".setting .content .row span");
let portImg = document.querySelector(".creativity .container .content.portfolio .image img");
let randomImg = document.querySelector(".creativity .container .content.random .image img");
let language = document.querySelectorAll(".footer .lang .language");
let languagelinks = document.querySelectorAll(".footer .lang .language a");
let nightIcon = document.querySelector(".setting .theme .icon");

nightIcon.onclick = function () {

  if (nightIcon.classList.contains("active")) {
  
    nightIcon.classList.remove("active");
  
    localStorage.setItem("theme", "light")
  
  } else {
  
    nightIcon.classList.add("active");
  
    localStorage.setItem("theme", "dark")
  
  }

  themeMood();

}

let tsBlack = []

function themeMood() {

  
  if (localStorage.getItem("theme") === "dark") {

    let tBlack = document.querySelectorAll(".text-black-50");
    let link = document.createElement("link")

    link.setAttribute("rel", "stylesheet");
    link.classList.add("night-mood");
    link.setAttribute("href", "style/dark-mood.css");
    

    tBlack.forEach((element) => {
      if (!tsBlack.includes(element)) {
        tsBlack.push(element);
      }

      element.classList.remove("text-black-50");
      element.classList.add("text-white-50");
      console.log(tsBlack)
    })

    document.querySelector("head").appendChild(link)
    
  } else if (localStorage.getItem("theme") === "light") {
    
    document.querySelectorAll("head link.night-mood").forEach((link) => {
      link.remove()
    })
    
    tsBlack.forEach((element) => {
      element.classList.remove("text-white-50");
      element.classList.add("text-black-50");
    })

    tsBlack = []
  
  }

}


window.onload = function () {

  if (!localStorage.getItem("theme-color")) {
    localStorage.setItem("theme-color", "light-green");
  }

  theme()

  colors.forEach((e) => {

    if (e.classList.contains(localStorage.getItem("theme-color"))) {

      e.classList.add("active");

    }

  })

  language.forEach((lang) => {

    languagelinks.forEach((lan) => {
      lan.classList.contains("en") ? lang.setAttribute("href", "index.html") : '';
      lan.classList.contains("ar") ? lang.setAttribute("href", "index-ar.html") : '';
    })

    if (lang.classList.contains(document.querySelector("html").getAttribute("lang"))) {

      language.forEach((list) => {

        list.classList.remove("active");

      })

      lang.classList.add('active');
      
      let languagelink = document.querySelector(".footer .lang .active a");
  
      languagelink.removeAttribute("href");

    }

  });

  themeMood()

}


links.forEach(link => {
  link.onclick = function () {

    popap.classList.remove("hide");
    
    window.scrollTo(0, 900)

    popaptitle.innerHTML = `${this.attributes[0].value} template`.toLowerCase();
    popapP.prepend(`${this.attributes[0].value} `.toLowerCase());

    if (this.attributes[0].value === "bondi") {
      
      
      popapTlink.setAttribute("href", "https://download1480.mediafire.com/etof38lf0d1g/1kqhc3oyv4sevsv/Bondi.rar");
      popapPageLink.setAttribute("href", "https://moustafa-479.github.io/Bondi/");
      popapGithubCode.setAttribute("href", "https://github.com/Moustafa-479/Bondi");

      popapTlink.classList.remove("d-none");


    } else if (this.attributes[0].value === "kasper") {

      popapTlink.setAttribute("href", "https://download1508.mediafire.com/7j40ofehiuog/b43ehieel149enl/0.41882200+1412192251Kasper+-+One+Page+Creative+PSD+Template.zip");
      popapPageLink.setAttribute("href", "https://moustafa-479.github.io/Kasper_Project/");
      popapGithubCode.setAttribute("href", "https://github.com/Moustafa-479/Kasper_Project");

      popapTlink.classList.remove("d-none");

    } else if (this.attributes[0].value === "smak") {

      popapTlink.setAttribute("href", "https://download1325.mediafire.com/0jzxvfttn6ug/a19gt08fnft3kzm/smak.rar");
      popapPageLink.setAttribute("href", "https://moustafa-479.github.io/Smak-project/");
      popapGithubCode.setAttribute("href", "https://github.com/Moustafa-479/Smak-project");

      popapTlink.classList.remove("d-none");

      } else if (this.attributes[0].value === "elzero") {

      popapTlink.setAttribute("href", "#");
      popapPageLink.setAttribute("href", "https://moustafa-479.github.io/elzero/");
      popapGithubCode.setAttribute("href", "https://github.com/Moustafa-479/elzero");

      popapTlink.classList.add("d-none");
      
    }
    
  }
  
});

popapIcon.onclick = function () {
  popap.classList.add("hide");
}




window.onscroll = function () {

  if (window.scrollY >= 1200 ) {

    settingIcon.classList.remove("d-none");
    setting.classList.remove("d-none");

  } else {

    settingIcon.classList.add("d-none");
    setting.classList.add("d-none");
    
  }
  
}

settingIcon.onclick = function () {
  
  if (setting.classList.contains("active")) {

    setting.classList.remove("active");
    settingIcon.classList.remove("active")
    
  } else {


    setting.classList.add("active");
    settingIcon.classList.add("active")

  }

}


function theme() {

  if (localStorage.getItem("theme-color") === "light-green") {

    document.styleSheets[document.styleSheets.length - 1].insertRule(':root {--main-color: #00fff3;--second-color: #24484f;--section-padding: 107px;}', 0);

  } else if (localStorage.getItem("theme-color") === "red") {

    document.styleSheets[document.styleSheets.length - 1].insertRule(':root {--main-color: #E91E63; --second-color: #401d29;--section-padding: 107px;}', 0);

  } else if (localStorage.getItem("theme-color") === "pink") {

    document.styleSheets[document.styleSheets.length - 1].insertRule(':root {--main-color: #ca1ee9;--second-color: #371c40;--section-padding: 107px;}', 0);

  } else if (localStorage.getItem("theme-color") === "blue") {

    document.styleSheets[document.styleSheets.length - 1].insertRule(':root {--main-color: #0008ff;--second-color: #1a1c64;--section-padding: 107px;}', 0);

  } else if (localStorage.getItem("theme-color") === "orange") {

    document.styleSheets[document.styleSheets.length - 1].insertRule(':root {--main-color: #ff6a00;--second-color: #3c2819;--section-padding: 107px;}', 0);

  } else if (localStorage.getItem("theme-color") === "green") {

    document.styleSheets[document.styleSheets.length - 1].insertRule(':root {--main-color: #00ff14;--second-color: #183e1b;--section-padding: 107px;}', 0);

  } else if (localStorage.getItem("theme-color") === "light-blue") {

    document.styleSheets[document.styleSheets.length - 1].insertRule(':root {--main-color: #5193ff;--second-color: #1b363e;--section-padding: 107px;}', 0);

  } else if (localStorage.getItem("theme-color") === "yellow") {

    document.styleSheets[document.styleSheets.length - 1].insertRule(':root {--main-color: #f7cd00;--second-color: #403a1a;--section-padding: 107px;}', 0);

  }

  portImg.setAttribute("src", `img/${localStorage.getItem("theme-color")}-p.png`)
  randomImg.setAttribute("src", `img/${localStorage.getItem("theme-color")}-r.png`)

}


function active (list) {

  list.forEach((link) => {

  link.onclick = function () {

    list.forEach((element) => {

      element.classList.remove("active");

    });

    localStorage.setItem("theme-color", this.classList[0])

    this.classList.add("active");

    document.styleSheets[document.styleSheets.length - 1].deleteRule(0);

    theme()

    }

})

}

active(colors);