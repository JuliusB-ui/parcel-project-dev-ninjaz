document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".mobile-menu-icon"),n=document.querySelector(".close-menu-icon"),o=document.querySelector(".nav-list"),t=document.querySelector(".header-content"),d=document.body,r=!1;function l(){o.classList.remove("visible"),n.style.display="none",e.style.display="block",d.style.backgroundColor="",t.style.backgroundColor="",o.style.backgroundColor="",r=!1}e.addEventListener("click",(function(){r?l():(o.classList.add("visible"),e.style.display="none",n.style.display="block",d.style.backgroundColor="var(--dark-green, #1e2827)",t.style.backgroundColor="var(--dark-green, #1e2827)",o.style.backgroundColor="var(--dark-green, #1e2827)",r=!0)})),n.addEventListener("click",l),window.addEventListener("resize",(function(){var n=window.innerWidth>=768&&window.innerWidth<=1280,o=window.innerWidth>1280;n&&r&&l(),e.style.display=n||o?"none":"block"}))}));
//# sourceMappingURL=index.766abc65.js.map