// ✅ Typing Animation

const words = ["Developer","Programmer","Tech Enthusiast"];
let i=0;
let j=0;
let currentWord="";
let isDeleting=false;

function type(){

currentWord = words[i];

if(!isDeleting){
j++;
if(j===currentWord.length+1){
isDeleting=true;
setTimeout(type,1000);
return;
}
}else{
j--;
if(j===0){
isDeleting=false;
i=(i+1)%words.length;
}
}

document.querySelector(".typing").textContent=currentWord.substring(0,j);

setTimeout(type,isDeleting?60:120);
}

type();


// ✅ Scroll Reveal

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("active");
}
});
});

document.querySelectorAll('.reveal,.reveal-left,.reveal-right')
.forEach(el=>observer.observe(el));


// ✅ Contact Validation

const form = document.getElementById("contactForm");

if(form){
    form.addEventListener("submit", e=>{
        e.preventDefault();
        alert("Message Sent Successfully!");
    });
}


function toggleAbout(){

const more = document.getElementById("moreAbout");
const btn = document.getElementById("readBtn");

more.classList.toggle("show");

if(more.classList.contains("show")){
    btn.textContent = "Read Less";
}else{
    btn.textContent = "Read More";
}

}

/* ================= SKILL ANIMATION ================= */

const skillsSection = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".skill-progress");

const skillsObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {

        if(entry.isIntersecting){

            progressBars.forEach(bar => {
                const value = bar.getAttribute("data-progress");
                bar.style.width = value + "%";
            });

        }
    });

}, { threshold: 0.4 });

skillsObserver.observe(skillsSection);

const skills = document.querySelectorAll(".skill-progress");

window.addEventListener("scroll", () => {

    skills.forEach(skill => {

        const position = skill.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if(position < screen - 100){
            skill.style.width = skill.dataset.progress + "%";
        }

    });

});
