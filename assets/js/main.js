let ytube = document.getElementById("youtube");
let navbtn = document.getElementById("nav");


ytube.addEventListener("click", you)
function you() {
    window.location.href = "https://www.youtube.com/channel/UCT0qh0BK9kGe2atm0ea2UZQ";

}
navbtn.addEventListener("click", () => {
    let headermenu = document.querySelector('ul.header--menu');
    const navicon = document.querySelectorAll(".navicon");
    headermenu.classList.toggle('show')
    navicon.forEach(icon => {
        icon.classList.toggle("hidden");
    })
})