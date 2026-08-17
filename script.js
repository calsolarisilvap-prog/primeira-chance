/* =========================================================
   PRIMEIRA CHANCE
   SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     META PIXEL
  ========================== */

  function trackMetaEvent(eventName, parameters = {}) {
    try {
      if (typeof window.fbq === "function") {
        window.fbq("track", eventName, parameters);
      }
    } catch (error) {
      console.warn(
        `Não foi possível registrar o evento ${eventName}.`,
        error
      );
    }
  }


  /* =========================
     BOTÕES DE ANÁLISE
  ========================== */

  const leadButtons =
    document.querySelectorAll(".js-lead");

  leadButtons.forEach((button) => {

    button.addEventListener("click", () => {

      trackMetaEvent("Lead", {
        content_name: "Analise gratuita de curriculo",
        content_category: "Primeira Chance"
      });

    });

  });


  /* =========================
     BOTÕES DE CHECKOUT
  ========================== */

  const checkoutButtons =
    document.querySelectorAll(".js-checkout");

  checkoutButtons.forEach((button) => {

    button.addEventListener("click", () => {

      trackMetaEvent("InitiateCheckout", {
        content_name: "Kit Primeira Chance",
        content_category: "Curriculo profissional",
        value: 24.99,
        currency: "BRL"
      });

    });

  });


  /* =========================
     FAQ
  ========================== */

  const faqQuestions =
    document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

      const currentItem =
        question.closest(".faq-item");

      if (!currentItem) {
        return;
      }

      const isAlreadyOpen =
        currentItem.classList.contains("is-open");


      document
        .querySelectorAll(".faq-item")
        .forEach((item) => {

          item.classList.remove("is-open");

          const itemButton =
            item.querySelector(".faq-question");

          if (itemButton) {
            itemButton.setAttribute(
              "aria-expanded",
              "false"
            );
          }

        });


      if (!isAlreadyOpen) {

        currentItem.classList.add("is-open");

        question.setAttribute(
          "aria-expanded",
          "true"
        );

      }

    });

  });


  /* =========================
     ANIMAÇÕES AO ROLAR
  ========================== */

  const elementsToReveal =
    document.querySelectorAll(
      ".problem-card, " +
      ".comparison-card, " +
      ".review-card, " +
      ".kit-card, " +
      ".portfolio-preview, " +
      ".offer-box, " +
      ".path-card, " +
      ".faq-item"
    );


  if ("IntersectionObserver" in window) {

    elementsToReveal.forEach((element) => {
      element.classList.add("reveal");
    });


    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "is-visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -40px 0px"
        }
      );


    elementsToReveal.forEach((element) => {
      revealObserver.observe(element);
    });

  }


  /* =========================
     LINKS INTERNOS
  ========================== */

  const internalLinks =
    document.querySelectorAll(
      'a[href^="#"]:not([href="#"])'
    );

  internalLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetSelector =
        link.getAttribute("href");

      const target =
        document.querySelector(targetSelector);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });

});
/* ========================================
   CARROSSEL DO PORTFÓLIO
======================================== */

document.addEventListener("DOMContentLoaded", function () {

  const carousel = document.querySelector(".portfolio-carousel");

  if (!carousel) return;

  const slides = carousel.querySelectorAll(".portfolio-slide");
  const prevButton = carousel.querySelector(".portfolio-arrow.prev");
  const nextButton = carousel.querySelector(".portfolio-arrow.next");
  const dotsContainer = carousel.querySelector(".portfolio-dots");

  let currentSlide = 0;

  // Criar bolinhas automaticamente
  slides.forEach((slide, index) => {

    const dot = document.createElement("button");

    dot.classList.add("portfolio-dot");
    dot.setAttribute("type", "button");
    dot.setAttribute("aria-label", `Ver currículo ${index + 1}`);

    if (index === 0) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", function () {
      showSlide(index);
    });

    dotsContainer.appendChild(dot);

  });

  const dots = carousel.querySelectorAll(".portfolio-dot");

  function showSlide(index) {

    if (index >= slides.length) {
      index = 0;
    }

    if (index < 0) {
      index = slides.length - 1;
    }

    slides.forEach(slide => {
      slide.classList.remove("active");
    });

    dots.forEach(dot => {
      dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
  }

  nextButton.addEventListener("click", function () {
    showSlide(currentSlide + 1);
  });

  prevButton.addEventListener("click", function () {
    showSlide(currentSlide - 1);
  });

  // Suporte a gesto de arrastar no celular
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener("touchstart", function (event) {
    touchStartX = event.changedTouches[0].screenX;
  }, { passive: true });

  carousel.addEventListener("touchend", function (event) {

    touchEndX = event.changedTouches[0].screenX;

    const difference = touchStartX - touchEndX;

    if (Math.abs(difference) < 50) return;

    if (difference > 0) {
      showSlide(currentSlide + 1);
    } else {
      showSlide(currentSlide - 1);
    }

  }, { passive: true });

  showSlide(0);

});
