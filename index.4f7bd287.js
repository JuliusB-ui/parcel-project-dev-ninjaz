document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".mobile-menu-icon"),n=document.querySelector(".close-menu-icon"),t=document.querySelector(".nav-list"),i=document.querySelector(".main-header"),o=document.querySelectorAll(".nav-link"),d=document.body,l=!1;function c(){e.style.display=window.innerWidth<=767&&!l?"block":"none"}function s(){t.classList.remove("visible"),n.style.display="none",d.style.overflow="",i.style.position="",l=!1,c()}e.addEventListener("click",(function(){t.classList.add("visible"),e.style.display="none",n.style.display="block",d.style.overflow="hidden",i.style.position="fixed",l=!0})),n.addEventListener("click",s),o.forEach((function(e){e.addEventListener("click",(function(){s()}))})),window.addEventListener("resize",(function(){c(),window.innerWidth>767&&l&&s()})),c()}));
//# sourceMappingURL=index.4f7bd287.js.map
