document.querySelector(".btn-mobile-nav").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("nav-open");
})

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function(link){
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const herf = link.getAttribute("href");
        if(herf === "#"){
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
        if(herf !== "#" && herf.startsWith("#")) {
            const selectEL = document.querySelector(herf);
            selectEL.scrollIntoView({
                behavior: "smooth",
            })
        }
    });
});

