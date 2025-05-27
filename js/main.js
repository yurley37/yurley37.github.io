document.addEventListener("DOMContentLoaded", () => {
  
  const botones = document.querySelectorAll(".btn-ver-mas");
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const info = boton.nextElementSibling;
      if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
        boton.textContent = "Ver menos";
      } else {
        info.style.display = "none";
        boton.textContent = "Ver más";
      }
    });
  });

  
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach(carousel => {
    const slides = carousel.querySelectorAll(".slide");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        slide.style.display = i === index ? "block" : "none";
      });
      slides[index].classList.add("active");
    }

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
      showSlide(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
      showSlide(currentIndex);
    });

    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 4000);

    showSlide(currentIndex);
  });

  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll(".producto").forEach(producto => {
    observer.observe(producto);
  });
});
