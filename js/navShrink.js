var scrollPos = 0;
var navBg = document.getElementById("nav");
var navItems = document.getElementById("nav-items");
var Logo = document.getElementById("logo");

window.addEventListener('scroll', function() {
    scrollPos = window.scrollY;
    console.log(scrollPos);
    if(scrollPos > 499){
        navBg.classList.remove("hide");
        navBg.classList.add("show");
        navItems.classList.add("shrink");
        Logo.classList.remove("show");
        Logo.classList.add("hide");
    }
})

window.addEventListener('scroll', function() {
    scrollPos = window.scrollY;
    console.log(scrollPos);
    if(scrollPos < 499){
        navBg.classList.remove("show");
        navBg.classList.add("hide");
        navItems.classList.remove("shrink");
        Logo.classList.add("show");
    }
})