// ==========================================
// PORTFÓLIO SLIDER
// ==========================================

const track = document.querySelector(".portfolio-track");

const prev = document.querySelector(".prev");

const next = document.querySelector(".next");

if(track){

    const scrollAmount = 360;

    next.addEventListener("click",()=>{

        track.scrollBy({

            left:scrollAmount,

            behavior:"smooth"

        });

    });

    prev.addEventListener("click",()=>{

        track.scrollBy({

            left:-scrollAmount,

            behavior:"smooth"

        });

    });

    let isDown=false;

    let startX;

    let scrollLeft;

    track.addEventListener("mousedown",(e)=>{

        isDown=true;

        track.style.cursor="grabbing";

        startX=e.pageX-track.offsetLeft;

        scrollLeft=track.scrollLeft;

    });

    track.addEventListener("mouseleave",()=>{

        isDown=false;

        track.style.cursor="grab";

    });

    track.addEventListener("mouseup",()=>{

        isDown=false;

        track.style.cursor="grab";

    });

    track.addEventListener("mousemove",(e)=>{

        if(!isDown) return;

        e.preventDefault();

        const x=e.pageX-track.offsetLeft;

        const walk=(x-startX)*2;

        track.scrollLeft=scrollLeft-walk;

    });

}
// ==========================================
// PORTFOLIO MODAL
// ==========================================

const modal = document.getElementById("portfolioModal");

const modalImage = document.getElementById("modalImage");

const closeModal = document.querySelector(".close-modal");

const portfolioImages = document.querySelectorAll(".portfolio-card img");

portfolioImages.forEach((img)=>{

    img.addEventListener("click",()=>{

        modal.classList.add("active");

        modalImage.src = img.src;

        modalImage.alt = img.alt;

    });

});

closeModal.addEventListener("click",()=>{

    modal.classList.remove("active");

});

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.classList.remove("active");

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        modal.classList.remove("active");

    }

});
