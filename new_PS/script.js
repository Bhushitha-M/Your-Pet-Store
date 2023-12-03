let cartItems = [];

function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  let total = 0;

  // Clear the current items in the cart
  cartList.innerHTML = '';

  // Display the updated cart items
  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(listItem);
    total += item.price;
  });

  // Update the total price
  cartTotal.textContent = total.toFixed(2);
}
