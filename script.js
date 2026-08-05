/*==================================================
PRIMEIRA CHANCE
script.js
Versão 1.0
==================================================*/

/*=========================
FAQ
=========================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

/*=========================
HEADER
=========================*/

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 40){

        header.style.boxShadow="0 10px 35px rgba(0,0,0,.08)";

    }else{

        header.style.boxShadow="none";

    }

});

/*=========================
SCROLL SUAVE
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*=========================
ANIMAÇÃO AO APARECER
=========================*/

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(

".area-card,.problem-card,.step-card,.benefit-card,.comparison-card,.testimonial-card,.kit-card,.cta-card"

).forEach(card=>{

    observer.observe(card);

});

/*=========================
BOTÃO WHATSAPP
=========================*/

document.querySelectorAll(".btn-primary").forEach(button=>{

    button.addEventListener("click",()=>{

        console.log("Clique CTA");

    });

});

/*=========================
LOADING
=========================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

console.log("Primeira Chance V1.0 carregado.");
