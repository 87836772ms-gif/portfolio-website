// Somya Sharma Portfolio - Cheerful, Colorful & Light Aesthetic Script

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Play Intro Animation
  initIntroLoader();

  // 3. Dynamic Year
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 4. Mobile Menu Toggle
  initMobileMenu();

  // 5. Contact Form Handling
  initContactForm();
});

/* ==========================================================================
   Intro Preloader Welcome Animation
   ========================================================================== */
function initIntroLoader() {
  const introLoader = document.getElementById('introLoader');
  const loaderBar = document.getElementById('loaderBar');
  const loaderGreeting = document.getElementById('loaderGreeting');
  const loaderSub = document.getElementById('loaderSub');

  if (!introLoader) return;

  // Step 1: Animate progress bar forward
  setTimeout(() => {
    if (loaderBar) {
      loaderBar.style.width = '70%';
    }
  }, 100);

  // Step 2: Fill bar completely & update text
  setTimeout(() => {
    if (loaderBar) {
      loaderBar.style.width = '100%';
    }
    if (loaderGreeting) {
      loaderGreeting.innerHTML = 'Welcome to Somya\'s Space <span class="inline-block animate-bounce">💖</span>';
    }
    if (loaderSub) {
      loaderSub.textContent = 'All set! Entering website...';
    }
  }, 850);

  // Step 3: Smooth Exit (Slide up & fade out)
  setTimeout(() => {
    introLoader.classList.add('opacity-0', 'pointer-events-none', '-translate-y-8', 'scale-95');
    
    // Step 4: Cleanup from DOM
    setTimeout(() => {
      introLoader.remove();
    }, 700);
  }, 1400);
}

/* ==========================================================================
   Mobile Navigation Menu
   ========================================================================== */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!mobileMenuBtn || !mobileMenu) return;

  function toggleMenu() {
    const isExpanded = mobileMenu.classList.toggle('hidden');
    if (menuIcon && closeIcon) {
      if (isExpanded) {
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      } else {
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      }
    }
  }

  mobileMenuBtn.addEventListener('click', toggleMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      if (menuIcon && closeIcon) {
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });
  });
}

/* ==========================================================================
   Contact Form Submission
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');

  if (!form || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      showToast('Wait a moment', 'Please fill in your name, email and message.');
      return;
    }

    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending...</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();
      showToast('Message sent! 📬', `Thanks for reaching out, ${name}!`);
      if (window.lucide) window.lucide.createIcons();
    }, 800);
  });
}

/* ==========================================================================
   Copy Email to Clipboard
   ========================================================================== */
function copyEmailToClipboard() {
  const email = 'somya.sharma26b@iiitg.ac.in';
  navigator.clipboard.writeText(email).then(() => {
    showToast('Copied to Clipboard! 📋', email);
  }).catch(() => {
    showToast('Email Address', email);
  });
}

/* ==========================================================================
   Toast Notification System
   ========================================================================== */
let toastTimeout;
function showToast(title, message) {
  const toast = document.getElementById('toast');
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');

  if (!toast || !toastTitle || !toastMessage) return;

  toastTitle.textContent = title;
  toastMessage.textContent = message;

  toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
  }, 3200);
}
function openGameModal() {
    const modal = document.getElementById("gameModal");

    if (modal) {
        modal.classList.remove("hidden");
    }
}

function closeGameModal() {
    const modal = document.getElementById("gameModal");

    if (modal) {
        modal.classList.add("hidden");
    }
}