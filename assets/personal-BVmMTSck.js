import{f as h,e as j}from"./index-BEG84OOJ.js";const c=[{id:1,thumbnailImage:"./images/project images/guitar world/main.jpg",showcaseImages:["./images/project images/guitar world/preview1.jpg","./images/project images/guitar world/preview2.jpg","./images/project images/guitar world/preview3.jpg"],englishTitle:"Guitar World",englishDescription:"This is an online shop for buying different kinds of guitars which contains a homepage, about us, catalog(with filtering feature) and more...",farsiTitle:"پروژه دنیای گیتار",farsiDescription:"این پروژه یک فروشگاه انلاین برای فروش انواع گیتار میباشد که شامل صفحات مختلفی از جمله صفحه اصلی، درباره ما، کاتالوگ با قابلیت فیلتر محصولات و... میباشد. ",technologies:["React","Material UI","figma"],projectLink:"https://matinbaboli.github.io/guitar-world-store-project"}],f=document.getElementById("project-cards-wraper"),n=document.querySelector(".project-info-modal");function w(){console.log(c),v(),b()}w();function v(){const t=new URL(""+new URL("../icons/arrow-right-icon.svg",import.meta.url).href,import.meta.url);f.innerHTML=c.map(a=>{const{thumbnailImage:e,englishTitle:i,farsiTitle:o,id:s}=a;let l=sessionStorage.language==="en"?i:o;return`
                <div id="${s}" class="project-card">
                    <img src="${e}" alt="project-preview">
                    <div>
                        <h2 id="dynamic-text" data-translation-id="blank">${l}</h2>
                        <p id="text" data-translation-id="more_details">
                            <img src=${t} alt="arrow">
                        </p>
                    </div>
                </div>
        `}).join(""),d()}function b(){const t=document.querySelectorAll(".project-card");Array.from(t).forEach(e=>{e.addEventListener("click",i=>{n.showModal(),n.style.animation="modal-open 500ms";let o=Number(i.currentTarget.id);y(o)})})}function y(t){let a=c.filter(r=>r.id===t),{showcaseImages:e,englishTitle:i,englishDescription:o,farsiTitle:s,farsiDescription:l,technologies:p,projectLink:m}=a[0],g=sessionStorage.language==="en"?i:s,u=sessionStorage.language==="en"?o:l;n.innerHTML=`
            <button id="close-modal-btn">
                <img src="./public/icons/navbar-icons/close-icon.svg" alt="close-modal">
            </button>
            <div class="project-modal-content-wraper">
            <h2 id="dynamic-text" data-translation-id="blank">${g}</h2>
                <div id="project-details-wraper">
                    <p id="dynamic-text" data-translation-id="blank" class="project-description">${u}</p>
                    <aside class="project-details">
                        <div class="technologies-wraper">
                            <h3 id="dynamic-text" data-translation-id="technologies"></h3>
                            <div>
                                ${p.map(r=>`<p id="technologie-item">${r}</p>`).join("")}
                            </div>
                        </div>
                        <a href="${m}" target="_blank" id="dynamic-text" data-translation-id="view_project"
                            class="btn-primary btn-primary-small"></a>
                    </aside>
                    ${e.map(r=>`<img src="${r}" alt="project-preview">`).join("")}
                    
                </div>
            </div>

    `,document.getElementById("close-modal-btn").addEventListener("click",()=>{n.close(),n.style.animation="modal-close 500ms"}),d()}function d(){const t=document.querySelectorAll("#dynamic-text");let a;t.forEach(e=>{a=e.dataset.translationId,sessionStorage.language==="fa"?(e.innerHTML+=h[a],t.forEach(i=>{i.style.letterSpacing="1px",i.style.fontFamily="Noto Sans Arabic"})):e.innerHTML+=j[a]})}
