function e(e,t,i,a){Object.defineProperty(e,t,{get:i,set:a,enumerable:!0,configurable:!0})}var t=globalThis,i={},a={},o=t.parcelRequire82ef;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return i[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequire82ef=o);var n=o.register;n("5pDEP",function(t,i){e(t.exports,"en",()=>a);let a={blank:"",nav_home_link:"Home",nav_contact_me_link:"Contact me",nav_personal_projects_link:"Personal Projects",nav_official_projects_link:"Official Projects",resume_download_btn:"My Resume",about_me_title:"About Me",about_me_first_p:"Hi my name is Matin, i am a front-end web developer and a computer engineering student. I create easy to use websites with good and consistant UI design.",about_me_second_p:"I am fueled by my passion for creating visully pleasing and efficient websites and i'm always trying to learn new technologies and better ways to code like a hungry giant.",about_me_third_p:"Currently i am working as a freelancer and also open to job offers.",my_projects_title:"My Projects",official_link_explanation:"Through this link you can see the work that i have done for other companies.",personal_link_explanation:"Through this link you can see the projects that i have done in my spare time. Eather for practice or just for fun :).",official_projects_cool_link_title:"OFFICIAL",personal_projects_cool_link_title:"PERSONAL",view_projects_text:"view projects",my_skills_title:"My Skills",contact_me_page_title:"Contact Me",want_to_start_a_project:"Want to start a project?",email_me:"Email Me",or:"OR",personal_projects_page_title:"Personal Projects",more_details:"More Details",contact_me_notice:"Want to contact me? gently click this button to see my contact information.",technologies:"Technologies",client:"Client",view_project:"View Project",official_projects_page_title:"Official Projects"}}),n("iuQdw",function(t,i){e(t.exports,"fa",()=>a);let a={blank:"",nav_home_link:"صفحه اصلی",nav_contact_me_link:"تماس با من",nav_personal_projects_link:"پروژه‌های شخصی",nav_official_projects_link:"پروژه‌های رسمی",resume_download_btn:"رزومه من",about_me_title:"درباره من",about_me_first_p:"سلام من متین بابلی هستم و در حال حاضر مشغول به تحصیل در رشته مهندسی کامپیوتر و همچنین کار در حوزه فرانت‌اند وب هستم. تلاش من بر ساخت وبسایت‌هایی با طرز کار ساده و همچنین رابط کاربری خوب و یکپارچه است.",about_me_second_p:"من برای ساختن وبسایت‌های زیبا و چشم‌ نواز با کارایی بالا سرشار از انگیزه بوده و همواره در تلاش برای یادگیری تکنولوژی‌ها و راه‌های بهتری برای کدنویسی هستم.",about_me_third_p:"در حال حاضر من به عنوان فری لنسر در حال کار هستم و همچنین پذیرای پیشنهادات کاری می‌باشم.",my_projects_title:"پروژه‌های من",official_link_explanation:" با کلیک بر روی این لینک شما می‌توانید پروژه هایی که برای شرکت‌ها و مشتری‌ها انجام داده‌ام را مشاهده کنید.",personal_link_explanation:"با كلیک بر روی این لینک شما میتوانید پروژه‌هایی که برای تمرین یا بدلیل کنجکاوی و اشتیاق انجام داده‌ام را مشاهده کنید :).",official_projects_cool_link_title:"رسمی",personal_projects_cool_link_title:"شخصی",view_projects_text:"مشاهده پروژه‌ها",my_skills_title:"مهارت‌های من",contact_me_page_title:"تماس با من",want_to_start_a_project:"خواستار شروع به ساخت یک پروژه هستید؟",email_me:"ارسال ایمیل",or:"یا",personal_projects_page_title:"پروژه‌های شخصی",more_details:"جزِئیات بیشتر",contact_me_notice:"برای ارتباط با من و اطلاعات بیشتر میتوانید به ارامی روی این دکمه کلیک کنید.",technologies:"تکنولوژی ها",client:"مشتری",view_project:"مشاهده پروژه",official_projects_page_title:"پروژه‌های رسمی"}});var r=o("5pDEP"),l=o("iuQdw");const s=document.getElementById("project-cards-wraper"),c=document.querySelector(".project-info-modal");function _(){let e;let t=document.querySelectorAll("#dynamic-text");t.forEach(i=>{e=i.dataset.translationId,"fa"===sessionStorage.language?(i.innerHTML+=l.fa[e],t.forEach(e=>{e.style.letterSpacing="1px",e.style.fontFamily="Noto Sans Arabic"})):i.innerHTML+=r.en[e]}),console.log("clicked")}!async function(){let e=await fetch("../data/official-projects.json"),t=await e.json();s.innerHTML=t.map(e=>{let{thumbnailImage:t,englishTitle:i,farsiTitle:a,id:o}=e,n="en"===sessionStorage.language?i:a;return`
                <div id="${o}" class="project-card">
                    <img src="${t}" alt="project-preview">
                    <div>
                        <h2 id="dynamic-text" data-translation-id="blank">${n}</h2>
                        <p id="text" data-translation-id="more_details">
                            <img src="./icons/arrow-right-icon.svg" alt="arrow">
                        </p>
                    </div>
                </div>
        `}).join(""),_(),Array.from(document.querySelectorAll(".project-card")).forEach(e=>{e.addEventListener("click",e=>{c.showModal(),c.style.animation="modal-open 500ms",function(e,t){let{showcaseImages:i,englishTitle:a,englishDescription:o,farsiTitle:n,farsiDescription:r,technologies:l,projectLink:s}=t.filter(t=>t.id===e)[0],d="en"===sessionStorage.language?a:n,p="en"===sessionStorage.language?o:r;c.innerHTML=`
            <button id="close-modal-btn">
                <img src="./icons/navbar-icons/close-icon.svg" alt="close-modal">
            </button>
            <div class="project-modal-content-wraper">
                <h2 id="dynamic-text" data-translation-id="blank">${d}</h2>
                <div id="project-details-wraper">
                    <p id="dynamic-text" data-translation-id="blank" class="project-description">${p}</p>
                    <aside class="project-details">
                        <div class="technologies-wraper">
                            <h3 id="dynamic-text" data-translation-id="technologies"></h3>
                            <div>
                                ${l.map(e=>`<p id="technologie-item">${e}</p>`).join("")}
                            </div>
                        </div>
                        <div class="client-wraper">
                            <h3 id="dynamic-text" data-translation-id="client">
                            </h3>
                            <p>Someone</p>
                        </div>
                        <a href="${s}" target="_blank" id="dynamic-text" data-translation-id="view_project"
                            class="btn-primary btn-primary-small"></a>
                    </aside>
                    ${i.map(e=>`<img src="${e}" alt="project-preview">`).join("")}
                    
                </div>
            </div>

    `,document.getElementById("close-modal-btn").addEventListener("click",()=>{c.close(),c.style.animation="modal-close 500ms"}),_()}(Number(e.currentTarget.id),t)})})}();
//# sourceMappingURL=official-projects.c4cff590.js.map
