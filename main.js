// Responsive navigation menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Services Page: Toggle service details
document.addEventListener('DOMContentLoaded', () => {
  // Service details toggle
  document.querySelectorAll('.toggle-details-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const details = this.nextElementSibling;
      if (details) {
        details.style.display = (details.style.display === "block") ? "none" : "block";
      }
    });
  });

  // Gallery Page: Lightbox
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const closeLightbox = document.querySelector('.close-lightbox');
  if (galleryItems && lightbox && lightboxImg && lightboxCaption && closeLightbox) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = item.querySelector('img').src;
        lightboxCaption.textContent = item.querySelector('.gallery-caption').textContent;
      });
    });
    closeLightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
    // Close on background click or ESC
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.style.display = 'none';
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === "Escape") lightbox.style.display = 'none';
    });
  }

  // Contact Page: Simple form validation
  const contactForm = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  if (contactForm && formMsg) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!contactForm.name.value || !contactForm.email.value || !contactForm.message.value) {
        formMsg.textContent = "Please fill in all fields.";
        return;
      }
      formMsg.textContent = "Thank you for your message!";
      contactForm.reset();
      setTimeout(() => { formMsg.textContent = ""; }, 3000);
    });
  }
});