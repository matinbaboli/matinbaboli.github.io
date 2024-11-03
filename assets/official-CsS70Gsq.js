import{f as h,e as f}from"./index-BEG84OOJ.js";const u=document.getElementById("project-cards-wraper"),s=document.querySelector(".project-info-modal");async function v(){const e=await(await fetch("../data/official-projects.json")).json();y(e),b(e)}v();function y(t){u.innerHTML=t.map(e=>{const{thumbnailImage:a,englishTitle:i,farsiTitle:n,id:o}=e;let c=sessionStorage.language==="en"?i:n;return`
                <div id="${o}" class="project-card">
                    <img src="${a}" alt="project-preview">
                    <div>
                        <h2 id="dynamic-text" data-translation-id="blank">${c}</h2>
                        <p id="text" data-translation-id="more_details">
                            <img src="./icons/arrow-right-icon.svg" alt="arrow">
                        </p>
                    </div>
                </div>
        `}).join(""),l()}function b(t){const e=document.querySelectorAll(".project-card");Array.from(e).forEach(i=>{i.addEventListener("click",n=>{s.showModal(),s.style.animation="modal-open 500ms";let o=Number(n.currentTarget.id);w(o,t)})})}function w(t,e){let a=e.filter(r=>r.id===t),{showcaseImages:i,englishTitle:n,englishDescription:o,farsiTitle:c,farsiDescription:d,technologies:p,projectLink:m}=a[0],g=sessionStorage.language==="en"?n:c,j=sessionStorage.language==="en"?o:d;s.innerHTML=`
            <button id="close-modal-btn">
                <img src="./icons/navbar-icons/close-icon.svg" alt="close-modal">
            </button>
            <div class="project-modal-content-wraper">
                <h2 id="dynamic-text" data-translation-id="blank">${g}</h2>
                <div id="project-details-wraper">
                    <p id="dynamic-text" data-translation-id="blank" class="project-description">${j}</p>
                    <aside class="project-details">
                        <div class="technologies-wraper">
                            <h3 id="dynamic-text" data-translation-id="technologies"></h3>
                            <div>
                                ${p.map(r=>`<p id="technologie-item">${r}</p>`).join("")}
                            </div>
                        </div>
                        <div class="client-wraper">
                            <h3 id="dynamic-text" data-translation-id="client">
                            </h3>
                            <p>Someone</p>
                        </div>
                        <a href="${m}" target="_blank" id="dynamic-text" data-translation-id="view_project"
                            class="btn-primary btn-primary-small"></a>
                    </aside>
                    ${i.map(r=>`<img src="${r}" alt="project-preview">`).join("")}
                    
                </div>
            </div>

    `,document.getElementById("close-modal-btn").addEventListener("click",()=>{s.close(),s.style.animation="modal-close 500ms"}),l()}function l(){const t=document.querySelectorAll("#dynamic-text");let e;t.forEach(a=>{e=a.dataset.translationId,sessionStorage.language==="fa"?(a.innerHTML+=h[e],t.forEach(i=>{i.style.letterSpacing="1px",i.style.fontFamily="Noto Sans Arabic"})):a.innerHTML+=f[e]}),console.log("clicked")}
