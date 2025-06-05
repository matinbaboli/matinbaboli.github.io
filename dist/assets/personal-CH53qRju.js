import{f as h,e as j}from"./index-C1xGNKjJ.js";const c=[{id:1,thumbnailImage:"./images/project images/guitar world/main.png",showcaseImages:["./images/project images/guitar world/main.png","./images/project images/guitar world/preview1.png","./images/project images/guitar world/preview2.png","./images/project images/guitar world/preview3.png"],englishTitle:"Guitar World",englishDescription:"This is an online shop for buying different kinds of guitars which contains a homepage, about us, catalog(with filtering feature) and more...",farsiTitle:"پروژه دنیای گیتار",farsiDescription:"این پروژه یک فروشگاه انلاین برای فروش انواع گیتار میباشد که شامل صفحات مختلفی از جمله صفحه اصلی، درباره ما، کاتالوگ با قابلیت فیلتر محصولات و... میباشد. ",technologies:["React","Material UI","Figma","Zustand","Framer Motion"],projectLink:"https://matinbaboli.github.io/guitar-world-store-project"}],f=document.getElementById("project-cards-wraper"),n=document.querySelector(".project-info-modal");function w(){console.log(c),v(),b()}w();function v(){const a=new URL(""+new URL("../icons/arrow-right-icon.svg",import.meta.url).href,import.meta.url);f.innerHTML=c.map(t=>{const{thumbnailImage:e,englishTitle:i,farsiTitle:r,id:s}=t;let l=sessionStorage.language==="true"?r:i;return`
                <div id="${s}" class="project-card">
                    <img src="${e}" alt="project-preview">
                    <div>
                        <h2 id="dynamic-text" data-translation-id="blank">${l}</h2>
                        <p id="text" data-translation-id="more_details">
                            <img src=${a} alt="arrow">
                        </p>
                    </div>
                </div>
        `}).join(""),d()}function b(){const a=document.querySelectorAll(".project-card");Array.from(a).forEach(e=>{e.addEventListener("click",i=>{n.showModal(),n.style.animation="modal-open 500ms";let r=Number(i.currentTarget.id);y(r)})})}function y(a){let t=c.filter(o=>o.id===a),{showcaseImages:e,englishTitle:i,englishDescription:r,farsiTitle:s,farsiDescription:l,technologies:m,projectLink:g}=t[0],p=sessionStorage.language==="true"?s:i,u=sessionStorage.language==="true"?l:r;n.innerHTML=`
            <button id="close-modal-btn">
                <img src="./public/icons/navbar-icons/close-icon.svg" alt="close-modal">
            </button>
            <div class="project-modal-content-wraper">
            <h2 id="dynamic-text" data-translation-id="blank">${p}</h2>
                <div id="project-details-wraper">
                    <p id="dynamic-text" data-translation-id="blank" class="project-description">${u}</p>
                    <aside class="project-details">
                        <div class="technologies-wraper">
                            <h3 id="dynamic-text" data-translation-id="technologies"></h3>
                            <div>
                                ${m.map(o=>`<p id="technologie-item">${o}</p>`).join("")}
                            </div>
                        </div>
                        <a href="${g}" target="_blank" id="dynamic-text" data-translation-id="view_project"
                            class="btn-primary btn-primary-small"></a>
                    </aside>
                    ${e.map(o=>`<img src="${o}" alt="project-preview">`).join("")}
                    
                </div>
            </div>

    `,document.getElementById("close-modal-btn").addEventListener("click",()=>{n.close(),n.style.animation="modal-close 500ms"}),d()}function d(){const a=document.querySelectorAll("#dynamic-text");let t;a.forEach(e=>{t=e.dataset.translationId,sessionStorage.language==="true"?e.innerHTML+=h[t]:e.innerHTML+=j[t]})}
