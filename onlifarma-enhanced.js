// Asistente virtual
function showAssistant() {
  document.getElementById('assistant-modal').style.display = 'block';
}

function hideAssistant() {
  document.getElementById('assistant-modal').style.display = 'none';
}

function handleAssistantQuery() {
  const query = document.getElementById('assistant-input').value.toLowerCase();
  const responseElement = document.getElementById('assistant-response');
  
  if (query.includes('producto')) {
    responseElement.textContent = 'Ofrecemos una amplia gama de productos farmacéuticos. Puedes navegar por nuestro catálogo en la página de la tienda.';
  } else if (query.includes('entrega')) {
    responseElement.textContent = 'Ofrecemos entrega gratuita en pedidos superiores a R$50. La entrega estándar tarda de 2 a 3 días hábiles.';
  } else {
    responseElement.textContent = 'Lo siento, no pude entender tu consulta. Por favor, intenta preguntar sobre nuestros productos o servicios de entrega.';
  }

  document.getElementById('assistant-input').value = '';
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  loadCart();
  
  // Agregar manejadores de eventos a los botones "Agregar al carrito"
  const addToCartButtons = document.querySelectorAll('.btn-primary');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const productElement = e.target.closest('.item, .col-sm-6');
      if (productElement) {
        const name = productElement.querySelector('h3, .text-dark').textContent;
        const priceElement = productElement.querySelector('.price');
        const price = parseFloat(priceElement.textContent.replace('R$', '').trim());
        const image = productElement.querySelector('img').src;
        addToCart(name, price, image);
      }
    });
  });
});