let menuMobile = document.getElementById('btn-mobile');
let menu = document.getElementById('menu-mobile');
let home = document.getElementById('home');
let about = document.getElementById('about');
let projects = document.getElementById('projects');
let contact = document.getElementById('contact');
let header = document.getElementById('header');

AOS.init();

 let lastscroll = 0;

// função para esconder a barra de navegação ao rolar para baixo e mostrar a barra de navegação ao rolar para cima, para melhorar a experiência do usuário em dispositivos móveis.

 window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  let btnIcon = document.getElementById('btn-icon');
 
 
   if (currentScroll > lastscroll && currentScroll > 100) {
 
    header.style.top = '-150px';
    menu.classList.remove('active');
    btnIcon.classList.replace("fa-bars", "fa-x");
  
  } else {
    
    header.style.top = '0';
    btnIcon.classList.replace("fa-x", "fa-bars");
  
  }
  lastscroll = currentScroll;
  });



//função para mudança de idioma, ao clicar no botão, a barra de idiomas aparece e a barra de navegação é reposicionada para baixo para não sobrepor a barra de idiomas.

function toggleLanguage() {

  let language = document.getElementById('language');
  

   language.classList.toggle('fechar');

   let navBar = document.getElementById('nav');
  navBar.style.top = '0';
}

function mudarIdioma() {
  let idioma = document.getElementById('idioma');
  let idiomaNavegador = navigator.language;

  
  if (idioma.textContent === 'Brasil (Pt-Br)') {
    idioma.textContent = 'English (En)';
    alert('funcionalidade de mudança de idioma ainda não implementada, mas o botão já está funcionando para mostrar a barra de idiomas');
  }else {
    idioma.textContent = 'Brasil (Pt-Br)';  
  }

}
// fim função de mudança de idioma


// função para abrir e fechar o menu mobile, ao clicar no botão, o menu é aberto ou fechado, e o ícone do botão é alterado para indicar o estado do menu.

function toggleMenu() {

  menu.classList.toggle('active');

  let btnIcon = document.getElementById('btn-icon');

  if (btnIcon.classList.contains("fa-bars")) {
    btnIcon.classList.replace("fa-bars", "fa-x");
  } else {
    btnIcon.classList.replace("fa-x", "fa-bars");

  }
}




// fim função de menu mobile


// função para alternar entre o tema claro e escuro, ao clicar no botão, o tema é alternado e as cores do site são atualizadas de acordo com o tema selecionado.

function toggleTema() {
  let icon = document.getElementById('tema-icon');

  if (icon.classList.contains("fa-sun")) {
   
    icon.classList.replace("fa-sun", "fa-moon");
   
    document.querySelector(".background").style.backgroundImage = "url('image/fundo-dark.png')"; 
    document.documentElement.style.setProperty('--background-color1', '#000');
    document.documentElement.style.setProperty('--text-color1', '#F0BB78');
    document.documentElement.style.setProperty('--text-color2','#e2e2b6');
    document.documentElement.style.setProperty('--background-nav', '#000');
    document.documentElement.style.setProperty('--text-nav', '#fff');
    document.documentElement.style.setProperty('--github', '#fff');
  } else {
    
    icon.classList.replace("fa-moon", "fa-sun");
    
    document.querySelector(".background").style.backgroundImage = "url('image/claro.png')";
    document.documentElement.style.setProperty('--background-color1', '#ffffff');
    document.documentElement.style.setProperty('--text-color1','#f1aa4c');
    document.documentElement.style.setProperty('--text-color2','#000')
    document.documentElement.style.setProperty('--github', '#000');
    document.documentElement.style.setProperty('--background-nav', '#fff');
    document.documentElement.style.setProperty('--text-nav', '#000');
 
  }
}

// fim função de tema claro e escuro



document.addEventListener('DOMContentLoaded', () => {
  document.querySelector(".background").style.backgroundImage = "url('image/fundo-dark.png')";
});


