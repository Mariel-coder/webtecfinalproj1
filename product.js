document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');

    const products = {
        'running-shoes': {
            name: 'Running Shoes',
            description: 'Comfortable running shoes for daily exercise.',
            price: 75.99,
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/WMNS+AIR+FORCE+1+%2707.png'  // Ensure this path is correct
        },
        'basketball-shoes': {
            name: 'Basketball Shoes',
            description: 'High-performance basketball shoes.',
            price: 95.99,
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60d2e87c-9eaa-46a0-b9aa-0f730291262b/AIR+FORCE+1+%2707.png'  // Ensure this path is correct
        },
        'casual-shoes': {
            name: 'Casual Shoes',
            description: 'Devin Booker is a craftsman who can lose a defender with an ankle-snatching "stutter/go", then come back with a series of spellbinding jabs into a splashed jumper. Books signature shoe gives him the tools he needs to carve. With a super-smooth upper and speedy, cushioned ride, this design can help you explore the spaces created by your piercing footwork and hungry hooper soul. With its extra-durable rubber outsole, this version gives you traction for outdoor courts. This multi-coloured masterpiece takes its inspiration from the early-morning sunrises where Book calls home.',
            price: 7895,
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd2a2802-13aa-41cf-865f-7d86889278cb/AIR+FORCE+1+LOW.png'  // Ensure this path is correct
        },
        'Book 1 EP Sunrise': {
            name: 'Book 1 EP Sunrise',
            description: 'Devin Booker is a craftsman who can lose a defender with an ankle-snatching "stutter/go", then come back with a series of spellbinding jabs into a splashed jumper. Books signature shoe gives him the tools he needs to carve. With a super-smooth upper and speedy, cushioned ride, this design can help you explore the spaces created by your piercing footwork and hungry hooper soul. With its extra-durable rubber outsole, this version gives you traction for outdoor courts. This multi-coloured masterpiece takes its inspiration from the early-morning sunrises where Book calls home',
            price: 67.99,
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/389b709e-5102-4e55-aa5d-07099b500831/BLAZER+MID+%2777+VNTG.png' // Ensure this path is correct
        },
        'Nike Air Max AP': {
            name: 'Nike Air Max AP',
            description:'With its sleek, sporty design, the Nike Air Max AP lets you bridge past and present in first-class comfort. Flashes of heritage detailing nod to the Air Max 97, while the streamlined upper and softer midsole give it a modern edge. The low-profile design with a plush padded collar, airy mesh and a comfortable sockliner begs to be worn with any outfit.',
            price: 67.99,
            image:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ec9a0289-4230-44bf-8cd6-cb5da1f608e8/NIKE+AIR+MAX+AP.png' // Ensure this path is correct
        },
        'Nike Flight Legacy':{
            name: 'Nike Flight Legacy',
            description: 'Inspired by basketball shoes from the late 80s, the Nike Flight Legacy updates a classic look for modern times. Lightweight cushioning and a full rubber outsole give you retro design details and modern comfort.',
            price: 34.65,
            image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/12d13e39-e4ca-4625-915e-7df3d26100ec/NIKE+FLIGHT+LEGACY.png'  // Ensure this path is correct             
        },
        'Nike Air Max 90':{
            name: 'Nike Air Max 90',
            description: 'Lace up and feel the legacy. Produced at the cross section of art, music and culture, this champion running shoe helped define the 90s Worn by presidents revolutionised through collabs and celebrated through rare colourways, its striking visuals, Waffle outsole and exposed Air cushioning keep it alive and well.',
            price: 5279 ,
            image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/342250c6-7734-4f8c-a36d-cdbae29a08bb/AIR+MAX+90.png' // Ensure this path is correct
        },
        'Nike Dunk Low':{
            name: 'Nike Dunk Lowt',
            description: 'The 80s icon returns with classic details and throwback hoops flair. Channelling vintage style back onto the streets its padded collar lets you take your game anywhere—in comfort.',
            price: 45.65,
            image:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a5c39041-c327-4b87-9241-3af13a0e15dc/NIKE+DUNK+LOW+QS.png' // Ensure this path is correct
        },
        'Nike Air Max 2017':{
            name:'Nike Air Max 2017',
            description: 'The Nike Air Max 2017 delivers the plush sensation you love with a full-length Max Air unit.The upper is seamlessly constructed with zonal support and ventilation while moulded foam wraps your midfoot and heel for secure comfort.',
            price: 7629,
            image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9caabd31-67b5-4ce6-84c4-b2cd35f10292/NIKE+AIR+MAX+2017.png' // Ensure this path is correct
        },
        'shoes':{
            name:'Giannis Immortality 4 EP',
            description:'The Giannis Immortality 4 is for the multi-faceted player. The sleek, supportive heel shape is combined with an upgraded traction pattern from the previous iteration to help keep you making all those game-changing plays. With its extra-durable rubber outsole, this version gives you traction for outdoor courts.',
            price: 41.95,
            image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2d2c6d83-30ff-4d6d-8a2d-88a54adf31da/GIANNIS+IMMORTALITY+4+EP.png' // Ensure this path is correct
        },
        'shoes':{
            name:'Nike Air Max Command',
            description:'The Giannis Immortality 4 is for the multi-faceted player. The sleek, supportive heel shape is combined with an upgraded traction pattern from the previous iteration to help keep you making all those game-changing plays. With its extra-durable rubber outsole, this version gives you traction for outdoor courts.',
            price: 4829,
            image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e7e0fb1d-239c-4875-a170-e1064cf435c8/AIR+MAX+COMMAND.png'
        }

    };

    if (products[product]) {
        document.getElementById('product-name').textContent = products[product].name;
        document.getElementById('product-description').textContent = products[product].description;
        document.getElementById('product-price').textContent = `$${products[product].price.toFixed(2)}`;
        document.getElementById('product-image').src = products[product].image;
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const addToCartButton = document.getElementById('add-to-cart');
    addToCartButton.addEventListener('click', () => {
        const size = document.getElementById('size').value;
        const color = document.getElementById('color').value;
        const quantity = parseInt(document.getElementById('quantity').value);

        const cartItem = {
            name: products[product].name,
            price: products[product].price,
            size,
            color,
            quantity
        };

        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartButton();

        alert('Item added to cart');
    });

    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    function updateCartButton() {
        const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        document.getElementById('cart-button').textContent = `🛒 CART $${totalAmount.toFixed(2)}`;
    }

    updateCartButton();
});
