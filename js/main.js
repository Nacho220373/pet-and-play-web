// --- DOM Event Listeners ---

// 1. Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    
    if(targetId === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const targetElement = document.querySelector(targetId);
    if(targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// 2. Categories scroll logic
// Note: Shopify Buy Button handles its own rendering. The categories buttons 
// now just scroll to the store section.
const categoryFilters = document.querySelectorAll('.category-item');
categoryFilters.forEach(filter => {
  filter.addEventListener('click', () => {
    const tiendaSection = document.getElementById('tienda');
    if(tiendaSection) {
      tiendaSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 3. Toggle Store Logic
const toggleStoreBtn = document.getElementById('toggle-store-btn');
const storeWrapper = document.getElementById('store-wrapper');

if (toggleStoreBtn && storeWrapper) {
  toggleStoreBtn.addEventListener('click', () => {
    if (storeWrapper.classList.contains('hidden-offscreen')) {
      storeWrapper.classList.remove('hidden-offscreen');
      toggleStoreBtn.textContent = 'Minimizar Tienda';
    } else {
      storeWrapper.classList.add('hidden-offscreen');
      toggleStoreBtn.textContent = 'Abrir Tienda';
      // Mover la pantalla de vuelta al titulo para no quedar en espacio en blanco
      document.getElementById('tienda').scrollIntoView({ behavior: 'smooth' });
    }
  });
}


