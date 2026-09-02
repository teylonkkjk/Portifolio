'use strict';

// Função para alternar classes de elementos
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// Variáveis da Sidebar (Menu Lateral para Mobile)
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Adiciona evento de clique para mostrar/esconder contatos no mobile
if(sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}

// Variáveis de Navegação das Páginas
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Lógica de navegação entre as abas (Sobre, Currículo, Portfólio, Contato)
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    
    const clickedLinkText = this.innerHTML.toLowerCase().trim();

    for (let j = 0; j < pages.length; j++) {
      const pageName = pages[j].dataset.page.toLowerCase().trim();
      
      if (clickedLinkText === pageName) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        // Rola suavemente para o topo ao trocar de aba
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
  });
}