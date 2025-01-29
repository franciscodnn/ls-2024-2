(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const i=[{name:"Tesouro Selic 2029",value:100.5,origin:"Tesouro Nacional",category:"Pos",date:"2023-03-22",interest:"100% Selic"},{name:"Tesouro IPCA 2029",value:100,origin:"Tesouro Nacional",category:"IPCA",date:"2023-03-22",interest:"IPCA + 5,83%"}];function c(t){return t.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}function l(t){return new Date(t).toLocaleDateString("pt-BR")}function d(t){return`
    <div
      id="investment-${t.id}"
      class="bg-white shadow-md rounded-lg p-4"
    >
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-semibold text-gray-700">
          ${t.name}
        </h3>
        <p class="text-lg font-semibold text-gray-700">
          ${c(t.value)}
        </p>
      </div>
      <div class="mt-4">
        <p class="text-sm text-gray-500">
          <span class="font-bold">Origem:</span>
          ${t.origin}
        </p>
        <p class="text-sm text-gray-500">
          <span class="font-bold">Categoria:</span>
          ${t.category}
        </p>
        <p class="text-sm text-gray-500">
          <span class="font-bold">Data:</span>
          ${l(t.created_at)}
        </p>
        <p class="text-sm text-gray-500">
          <span class="font-bold">Taxa:</span>
          ${t.interest}
        </p>
      </div>
    </div>
  `}const u=document.querySelector(".investments");u.innerHTML=i.map(t=>d(t)).join("");
