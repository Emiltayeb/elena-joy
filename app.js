const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav-links")

burger.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("navOpen")

});


navLinks.forEach(links => {
  links.addEventListener("click",()=>{
    document.querySelector(".nav-links").classList.toggle("navOpen")
  })
});