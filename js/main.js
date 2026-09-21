import { products } from './data/products.js';
import { renderProductGrid } from './ui/render.js';

// --- Shopping Cart State & Logic ---
let cart = [];

window.addToCart = (productId) => {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  updateCartUI();
  
  // Open cart automatically when adding
  document.getElementById('cart-sidebar').classList.add('open');
  document.getElementById('cart-overlay').classList.add('active');
};

window.removeFromCart = (productId) => {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
};

window.updateQuantity = (productId, change) => {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      window.removeFromCart(productId);
    } else {
      updateCartUI();
    }
  }
};

function updateCartUI() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotalPrice = document.getElementById('cart-total-price');

  // Update count badge
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
  
  // Animate badge slightly
  cartCount.style.transform = 'scale(1.2)';
  setTimeout(() => cartCount.style.transform = 'scale(1)', 200);

  // Update total
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;

  // Render items
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Tu carrito está vacío.</p>';
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
        <div class="cart-item-actions">
          <div class="qty-control">
            <button class="qty-btn" onclick="window.updateQuantity('${item.id}', -1)">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="window.updateQuantity('${item.id}', 1)">+</button>
          </div>
          <button class="btn-remove-item" onclick="window.removeFromCart('${item.id}')">Eliminar</button>
        </div>
      </div>
    </div>
  `).join('');
}

// --- DOM Event Listeners ---
// 1. Initial Render of all products
renderProductGrid(products, 'products-grid');

// 2. Category Filtering Logic
const categoryFilters = document.querySelectorAll('.category-item');

categoryFilters.forEach(filter => {
  filter.addEventListener('click', () => {
    const categoryId = filter.dataset.category;
    
    // Filter products
    let filteredProducts = products;
    if (categoryId !== 'todos') {
      filteredProducts = products.filter(p => p.category === categoryId);
    }
    
    // Re-render
    renderProductGrid(filteredProducts, 'products-grid');
    
    // Scroll to products section smoothly
    document.getElementById('tienda').scrollIntoView({ behavior: 'smooth' });
  });
});

// 3. Smooth scrolling for navigation links
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

// 4. Cart UI Toggles
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');

const closeCart = () => {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('active');
};

document.getElementById('cart-btn').addEventListener('click', () => {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('active');
});

document.getElementById('close-cart').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// Mock checkout behavior
document.getElementById('checkout-btn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Tu carrito está vacío. ¡Agrega productos primero!');
  } else {
    alert('¡Gracias por tu compra simulada! Procediendo al pago de $' + cart.reduce((s, i) => s + (i.price * i.quantity), 0).toFixed(2));
    cart = [];
    updateCartUI();
    closeCart();
  }
});
