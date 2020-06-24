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
//when nav is open, and anywhere is clicked, close nav
window.addEventListener('click', e => {
  if(!e.target.classList.contains('fa-bars') && !e.target.classList.contains('icon')) closeNav();
  return;
});
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


//Dark mode
const darkBtn = document.querySelector('.dark-btn');
const lightBtn = document.querySelector('.light-btn');

const showModeButton = mode => {
  switch (mode) {
    case 'dark':
      darkBtn.style.display = 'block';
      lightBtn.style.display = 'none';
      break;
  
    default:
      darkBtn.style.display = 'none';
      lightBtn.style.display = 'block';
      break;
  }
}

let isDark = window.matchMedia('(prefers-color-scheme : dark)').matches;
let currentMode = isDark ? 'dark' : 'light';
showModeButton(currentMode);
document.documentElement.setAttribute('data-theme', currentMode);

const switchMode = () => {
  if(currentMode === 'light') {
    currentMode = 'dark';
    document.documentElement.setAttribute('data-theme', 'dark');
    showModeButton('dark');
  }
  else {
    currentMode = 'light';
    document.documentElement.setAttribute('data-theme', 'light');
    showModeButton('light');
  }
}

darkBtn.addEventListener('click', switchMode);
lightBtn.addEventListener('click', switchMode);