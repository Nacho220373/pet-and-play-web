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
      // Si navegamos a categorías o tienda, asegúrate de que el contenedor de la tienda esté abierto
      if (targetId === '#categorias' || targetId === '#tienda') {
        const storeWrapper = document.getElementById('store-wrapper');
        const toggleStoreBtn = document.getElementById('toggle-store-btn');
        if (storeWrapper && storeWrapper.classList.contains('hidden-offscreen')) {
          storeWrapper.classList.remove('hidden-offscreen');
          if (toggleStoreBtn) toggleStoreBtn.textContent = 'Minimizar Tienda';
        }
      }

      // Pequeño timeout para permitir que el elemento se muestre antes de hacer scroll
      setTimeout(() => {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }, 50);
    }
  });
});

// 2. Categories scroll & filter logic
const collectionIds = {
  'todos': '661891350820',
  'antipulgas': '662279422244',
  'belleza': '662279455012',
  'gatos': '662279487780',
  'hogar': '662279520548',
  'pecuario': '662279553316'
};

const categoryFilters = document.querySelectorAll('.category-item');
categoryFilters.forEach(filter => {
  filter.addEventListener('click', () => {
    const category = filter.getAttribute('data-category');
    
    // Switch the collection if window.renderShopifyCollection is ready
    if (window.renderShopifyCollection && collectionIds[category]) {
      window.renderShopifyCollection(collectionIds[category]);
    }

    const tiendaSection = document.getElementById('tienda');
    if(tiendaSection) {
      tiendaSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Auto-open store if closed
    const storeWrapper = document.getElementById('store-wrapper');
    const toggleStoreBtn = document.getElementById('toggle-store-btn');
    if (storeWrapper && storeWrapper.classList.contains('hidden-offscreen')) {
      storeWrapper.classList.remove('hidden-offscreen');
      if (toggleStoreBtn) toggleStoreBtn.textContent = 'Minimizar Tienda';
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


