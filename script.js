/* ============================================
   Full Spectrum Wound Care — Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Mobile menu toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      mobileToggle.classList.toggle('active');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      // Toggle clicked
      if (!isOpen) item.classList.add('open');
    });
  });

  // Service detail accordion
  document.querySelectorAll('.service-detail-header').forEach(h => {
    h.addEventListener('click', () => {
      const detail = h.parentElement;
      detail.classList.toggle('open');
    });
  });

  // Back to top
  const backBtn = document.querySelector('.back-to-top');
  if (backBtn) {
    window.addEventListener('scroll', () => {
      backBtn.classList.toggle('visible', window.scrollY > 400);
    });
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Fade in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Add medication row
  const addMedBtn = document.getElementById('add-med-row');
  if (addMedBtn) {
    addMedBtn.addEventListener('click', () => {
      const tbody = document.querySelector('#med-table tbody');
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><input type="text" name="med_name[]" /></td>
        <td><input type="text" name="med_dose[]" /></td>
        <td><input type="text" name="med_freq[]" /></td>
      `;
      tbody.appendChild(row);
    });
  }

  // Add allergy row
  const addAllergyBtn = document.getElementById('add-allergy-row');
  if (addAllergyBtn) {
    addAllergyBtn.addEventListener('click', () => {
      const tbody = document.querySelector('#allergy-table tbody');
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><input type="text" name="allergy_name[]" /></td>
        <td><input type="text" name="allergy_reaction[]" /></td>
      `;
      tbody.appendChild(row);
    });
  }

  // Add surgery row
  const addSurgeryBtn = document.getElementById('add-surgery-row');
  if (addSurgeryBtn) {
    addSurgeryBtn.addEventListener('click', () => {
      const tbody = document.querySelector('#surgery-table tbody');
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><input type="text" name="surgery_type[]" /></td>
        <td><input type="text" name="surgery_reason[]" /></td>
        <td><input type="text" name="surgery_month[]" /></td>
        <td><input type="text" name="surgery_year[]" /></td>
      `;
      tbody.appendChild(row);
    });
  }

  // Print form
  const printBtn = document.getElementById('print-form');
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }

});
