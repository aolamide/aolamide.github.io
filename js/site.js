//NAVBAR BELOW
const navbar = document.getElementById("navbar");
const newNavbarPosition = 80;
const navButton = document.getElementById("toggleNav");
const x = document.getElementById("navbar");
const tog_icon = document.getElementById("toggle-icon");
const changeNavbar = () => {
  if (window.pageYOffset >= newNavbarPosition ) {
    navbar.classList.add("newNav")
  } else {
    navbar.classList.remove("newNav");
  }
}
window.onscroll = changeNavbar;

const toggleNav = () => {
  x.classList.toggle("navbarDrop");
  x.classList.toggle("navbar");
  tog_icon.classList.toggle("fa-times");
}
const resize = () => {
	if(window.innerWidth >= 600){
    x.className = "navbar";
    tog_icon.classList.remove("fa-times");
	}
}
window.onresize = resize;
navButton.addEventListener("click", toggleNav);
//close dropdown when link is clicked on mobile
function closeNav() {
  if(x.classList.contains("navbarDrop")){
    toggleNav();
  }
}
//NAVBAR ABOVE
const body = document.getElementById("body");
const myName = document.getElementById("myName");
const myTitle = document.getElementById("myTitle");
const mySocials = document.getElementById("socials");
const toPosition = (element) => {
	element.style.transform = "none";
}

const socials = ()=>toPosition(mySocials);
const name = ()=>toPosition(myName);
const title = ()=>toPosition(myTitle);
window.onload = setTimeout(name, 1000), setTimeout(title, 3000), setTimeout(socials, 5000);

//particles.js
particlesJS("particles-js",{
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#567"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#e4e5e3",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

