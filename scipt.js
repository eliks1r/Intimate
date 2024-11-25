document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const filterButtons = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            products.forEach(product => {
                if (category === 'all' || product.dataset.category === category) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    const cartButtons = document.querySelectorAll('.add-to-cart');
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.parentElement.querySelector('h3').textContent;
            cart.push(productName);
            alert(`Добавлено в корзину: ${productName}`);
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Добавление товара в корзину
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.dataset.id;
            const name = button.dataset.name;
            const price = parseInt(button.dataset.price, 10);

            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }
            updateCart();
        });
    });

    // Обновление корзины
    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(item => {
            totalPrice += item.price * item.quantity;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <h3>${item.name} x${item.quantity}</h3>
                <div>
                    <span>${item.price * item.quantity} ₽</span>
                    <button class="remove-item" data-id="${item.id}">Удалить</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        totalPriceElement.textContent = totalPrice;

        // Удаление товара
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', () => {
                const id = button.dataset.id;
                const itemIndex = cart.findIndex(item => item.id === id);
                if (itemIndex !== -1) {
                    cart.splice(itemIndex, 1);
                    updateCart();
                }
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Добавление товара в корзину
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.dataset.id;
            const name = button.dataset.name;
            const price = parseInt(button.dataset.price, 10);

            // Проверяем, есть ли уже товар в корзине
            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }
            updateCart();
        });
    });

    // Обновление корзины
    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(item => {
            totalPrice += item.price * item.quantity;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <h3>${item.name} x${item.quantity}</h3>
                <div>
                    <span>${item.price * item.quantity} ₽</span>
                    <button class="remove-item" data-id="${item.id}">Удалить</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        totalPriceElement.textContent = totalPrice;

        // Удаление товара
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', () => {
                const id = button.dataset.id;
                const itemIndex = cart.findIndex(item => item.id === id);
                if (itemIndex !== -1) {
                    cart.splice(itemIndex, 1);
                    updateCart();
                }
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const cart = []; // Хранилище товаров
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Добавление товара в корзину
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.dataset.id;
            const name = button.dataset.name;
            const price = parseInt(button.dataset.price, 10);

            // Проверяем, есть ли уже товар в корзине
            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1; // Увеличиваем количество
            } else {
                cart.push({ id, name, price, quantity: 1 }); // Добавляем новый товар
            }
            updateCart();
        });
    });

    // Функция обновления корзины
    function updateCart() {
        cartItemsContainer.innerHTML = ''; // Очищаем контейнер
        let totalPrice = 0;

        cart.forEach(item => {
            totalPrice += item.price * item.quantity;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p>Количество: ${item.quantity}</p>
                </div>
                <div class="cart-item-actions">
                    <p>${item.price * item.quantity} ₽</p>
                    <button class="remove-item" data-id="${item.id}">Удалить</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        totalPriceElement.textContent = totalPrice;

        // Обработчик удаления товара
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', () => {
                const id = button.dataset.id;
                const index = cart.findIndex(item => item.id === id);
                if (index !== -1) {
                    cart.splice(index, 1); // Удаляем товар из корзины
                    updateCart();
                }
            });
        });
    }
});
