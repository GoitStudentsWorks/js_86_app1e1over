var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequirec149;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequirec149=r);var n=r("ioLrG"),a=r("8IduK");document.querySelector(".recipe-container");const l=document.querySelector(".filters-list"),i=(document.querySelector(".favorites-list"),JSON.parse(localStorage.getItem("Favorites"))||[]);function c(){const e=document.querySelectorAll(".recipe-card-container");let t=JSON.parse(localStorage.getItem("id"));t&&e.forEach((e=>{t.forEach((t=>{e.dataset.recipe==t&&e.querySelector(".heart-button").classList.add("add")}))}))}function s(){console.log(i),i&&i.length?(l.innerHTML='<li><button class="filters-btn" type="button" data-id="All">All categories</button></li>',d(i),l.insertAdjacentHTML("beforeend",d(i))):l.innerHTML="";const e=localStorage.getItem("btn-active");if(e){document.querySelectorAll(".filters-btn").forEach((t=>{t.dataset.id==e&&(p(t),f(t),c())}))}}function d(e){return e.map((({category:e})=>e)).filter(((e,t,o)=>o.indexOf(e)===t)).sort().map((e=>`<li><button class="filters-btn" type="button" data-id="${e}">${e}</button></li>`)).join("")}console.log(localStorage.getItem("btn-active")),s();let u=!1;function f(e){document.querySelectorAll(".filters-btn").forEach((e=>e.classList.remove("active"))),e.classList.add("active"),localStorage.setItem("btn-active",e.dataset.id)}l.addEventListener("mousemove",(function(e){if(!u)return;l.scrollLeft-=e.movementX})),l.addEventListener("mousedown",(function(){u=!0})),document.addEventListener("mouseup",(function(){u=!1})),l.addEventListener("click",(function(e){if(console.log(e.target),"BUTTON"!=e.target.nodeName)return;f(e.target),p(e.target),c()})),console.log(localStorage.getItem("btn-active"));document.querySelector(".favorites-list");const g=document.querySelector(".favorites-plug"),m=(document.querySelector(".test-cards"),document.querySelector(".fav-picture-thumb"));function v({page:e}){document.querySelector(".favorites-list");g.classList.add("is-hidden"),m.classList.remove("is-hidden");let t=JSON.parse(localStorage.getItem("Favorites"));if(!t.length)return g.classList.remove("is-hidden"),void(window.matchMedia("(max-width: 767px)").matches&&m.classList.add("is-hidden"));let o=12*e-12,r=12*e;s(),S(t,o,r)}function p(e){const t=document.querySelector(".favorites-list");let o=JSON.parse(localStorage.getItem("Favorites"));t.innerHTML="";const r=e;if("All"===r)S(o,start,end);else{let e=1;S(o.filter((e=>e.category.trim().toLowerCase()===r.dataset.id.trim().toLowerCase()||"All"==r.dataset.id)),12*e-12,12*e)}}function S(e,t,o){const r=document.querySelector(".favorites-list");r.innerHTML="";for(let a=t;a<o&&a<e.length;a+=1)r.append((0,n.DrawCard)(e[a]))}var h=r("13v5H"),y=r("7O1Fl"),b=r("7D46p");(0,y.StartScrollUp)(),(0,b.ModalStart)();try{(0,h.startHeader)()}catch(e){console.log(e)}try{!function(){let e=JSON.parse(localStorage.getItem("Favorites")),t=Math.ceil(e.length/12);v({page:1}),e.length>12&&(0,a.createPagination)(t,1,v)}()}catch(e){console.log(e)}c();
//# sourceMappingURL=favorites.16527ff1.js.map
