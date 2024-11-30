document.addEventListener('DOMContentLoaded', () => {
    const detailButtons = document.querySelectorAll('.details-button');
    detailButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.getAttribute('data-product');
            window.location.href = `product.html?product=${product}`;
        });
    });

    const cartButton = document.getElementById('cart-button');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.querySelector('.close');

    const checkoutButton = document.getElementById('checkout-button');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeCheckoutModal = document.querySelector('.close-checkout');

    cartButton.addEventListener('click', () => {
        cartModal.style.display = 'flex';
        displayCartItems();
    });

    closeModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    checkoutButton.addEventListener('click', () => {
        checkoutModal.style.display = 'flex';
        cartModal.style.display = 'none';
    });

    closeCheckoutModal.addEventListener('click', () => {
        checkoutModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === checkoutModal) {
            checkoutModal.style.display = 'none';
        }
    });

    function displayCartItems() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<tr><td colspan="4">EMPTY CART</td></tr>';
        } else {
            let totalAmount = 0;
            cart.forEach(item => {
                const subtotal = item.price * item.quantity;
                totalAmount += subtotal;

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td>$${item.price.toFixed(2)}</td>
                    <td>${item.quantity}</td>
                    <td>$${subtotal.toFixed(2)}</td>
                `;
                cartItemsContainer.appendChild(row);
            });

            document.getElementById('item-count').textContent = cart.length;
            document.getElementById('total-amount').textContent = `$${totalAmount.toFixed(2)}`;
        }
    }

    function updateCartButton() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        document.getElementById('cart-button').textContent = `🛒 CART $${totalAmount.toFixed(2)}`;
    }

    const checkoutForm = document.getElementById('checkout-form');
    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const zip = document.getElementById('zip').value;
        const city = document.getElementById('city').value;
        const country = document.getElementById('country').value;

        // Here you would typically handle the form submission,
        // like sending data to a server or displaying a confirmation message.
        
        alert('Checkout information submitted successfully!');
        
        // Clear cart and close checkout modal
        localStorage.removeItem('cart');
        updateCartButton();
        checkoutModal.style.display = 'none';
    });

    updateCartButton();
});
