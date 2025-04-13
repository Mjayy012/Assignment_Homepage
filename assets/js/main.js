// cookie
const cookieContainer = document.getElementById("cookieContainer");
const acceptCookie = document.getElementById("acceptCookie");

// Show cookie popup only if not already accepted
window.addEventListener("load", () => {
  if (!localStorage.getItem("cookieAccepted")) {
    cookieContainer.classList.remove("hide");
  }
});

// Handle accept click
acceptCookie.addEventListener("click", () => {
  cookieContainer.classList.add("hide");
  localStorage.setItem("cookieAccepted", "true");
});


// slider
const swiper = new Swiper(".swiper-slider", {
    // Optional parameters
    centeredSlides: true,
    slidesPerView: 1,
    grabCursor: true,
    freeMode: false,
    loop: true,
    mousewheel: false,
    keyboard: {
      enabled: true
    },
  
    // Enabled autoplay mode
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: false,
      clickable: true
    },
  
    // If we need navigation
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  
    // Responsive breakpoints
    breakpoints: {
      640: {
        slidesPerView: 1.25,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });



  // form
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    // Optionally: You could reset the form here
    contactForm.reset();

    // Show SweetAlert success message
    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for getting in touch. We'll reply shortly!",
      icon: "success",
      confirmButtonColor: "#664e4e"
    });
  });


//scroll up
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  // detect time
  window.addEventListener("DOMContentLoaded", () => {
    const today = new Date().getDay(); // 0 = Sunday, 6 = Saturday
    const listItems = document.querySelectorAll("#hoursList li");

    listItems.forEach(item => {
      if (parseInt(item.dataset.day) === today) {
        item.classList.add("highlight");
      }
    });
  });