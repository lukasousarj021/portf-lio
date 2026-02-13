let menuMobile = document.getElementById('btn-mobile');
let menu = document.getElementById('menu-mobile');
let home = document.getElementById('home');
let about = document.getElementById('about');
let projects = document.getElementById('projects');
let contact = document.getElementById('contact');


function toggleMenu() {
    
    menu.classList.toggle('active');

    let btnIcon = document.getElementById('btn-icon');

    if (btnIcon.classList.contains("fa-bars")) {
  btnIcon.classList.replace("fa-bars", "fa-x");
} else {
  btnIcon.classList.replace("fa-x", "fa-bars");

}
}

function toggleTema() {
    let icon = document.getElementById('tema-icon');

    if (icon.classList.contains("fa-moon")) {
  icon.classList.replace("fa-moon", "fa-sun");
  home.classList.toggle('dark');
  about.classList.toggle('dark');
  projects.classList.toggle('dark');
  contact.classList.toggle('dark');
} else {
  icon.classList.replace("fa-sun", "fa-moon");
}



}
