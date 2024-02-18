var navmenubutton = document.getElementById('NavButton');
var mobilemenu = document.getElementById("MobileMenu")
navmenubutton.addEventListener('click', function() {
    if (mobilemenu.style.display === "none") {
        mobilemenu.style.display = "flex"
    }
    else {
        mobilemenu.style.display = "none"
    }
})
