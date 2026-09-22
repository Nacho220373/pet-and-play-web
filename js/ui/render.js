// UI Rendering Functions
// Separation of Concerns: This file only handles how data is translated to HTML DOM elements.

export function renderProduct(product) {
  // Translate category to CSS class identifier
  const categoryColorClass = `cat-${product.category}`;
  
  const categoryNames = {
    'antipulgas': 'Antipulgas y Garrapatas',
    'belleza': 'Belleza e Higiene',
    'hogar': 'Hogar',
    'pecuario': 'Pecuario',
    'gatos': 'Gatos'
  };
  const categoryDisplayName = categoryNames[product.category] || product.category;
  
  return `
    <article class="product-card">
      <div class="product-badge ${categoryColorClass}">
        ${categoryDisplayName}
      </div>
      <div class="product-image">
        <img src="${product.image}" alt="${product.title}" loading="lazy">
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-footer">
          <span class="product-price">$${product.price.toFixed(2)}</span>
          <button class="btn-add" aria-label="Agregar al carrito" onclick="window.addToCart('${product.id}')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `;
}

export function renderProductGrid(products, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (products.length === 0) {
    container.innerHTML = '<p class="text-secondary">No hay productos en esta categoría por el momento.</p>';
    return;
  }

  const html = products.map(renderProduct).join('');
  container.innerHTML = html;
}
