const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");
let currentTheme = rootHtml.getAttribute("data-theme");

function startTheme(){
  localStorage.getItem('color') === "dark" ? rootHtml.setAttribute("data-theme", "dark") : rootHtml.setAttribute("data-theme", "light")
}

startTheme()

function changeTheme(){
  
  localStorage.getItem('color') === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark")
  currentTheme = rootHtml.getAttribute("data-theme");
  localStorage.setItem("color",currentTheme)
  toggleTheme.classList.toggle("bi-sun")
  toggleTheme.classList.toggle("bi-moon-stars")
}

toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
  })
})

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  })
})

const options = {
  root:null,
  threshold: 0.50
}

const aver = document.querySelectorAll('section')

const oia = new IntersectionObserver((parte)=>{
  parte.forEach((qual)=>{
    if (qual.isIntersecting) {
      let descobri = qual.target.classList
      if (descobri.contains("technologies")) {
        menuLinks.forEach(i => i.classList.remove("active"));
        menuLinks[0].classList.add("active");
      }
      if (descobri.contains("projects")) {
        menuLinks.forEach(i => i.classList.remove("active"));
        menuLinks[1].classList.add("active");
      }
      if (descobri.contains("about")) {
        menuLinks.forEach(i => i.classList.remove("active"));
        menuLinks[2].classList.add("active");
      }
      if (descobri.contains("contact")) {
        menuLinks.forEach(i => i.classList.remove("active"));
        menuLinks[3].classList.add("active");
      }
    }
  })
  
   
},options)

aver.forEach((elemento) => oia.observe(elemento))
