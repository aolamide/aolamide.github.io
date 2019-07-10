const skillsOffset = document.getElementById("skills").offsetHeight;
const bars = document.querySelectorAll(".p-bar");
window.addEventListener("scroll", animate);
function animate() {
    if(window.pageYOffset >= skillsOffset + 40){
        for(var i = 0; i < bars.length; i++){
            bars[i].style.animation = "progress 0.5s linear 0.7s forwards";
        }
        window.removeEventListener("scroll", animate);
    }
}
