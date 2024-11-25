document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Отменяем стандартное поведение формы

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Простая валидация
    if (!name || !phone || !password || !confirmPassword) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }

    if (password !== confirmPassword) {
        alert('Пароли не совпадают!');
        return;
    }

    // Отправка данных на сервер
    registerUser({ name, phone, password });
});

function registerUser(userData) {
    fetch('register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Регистрация успешна!');
                window.location.href = 'login.html'; // Перенаправление на страницу входа
            } else {
                alert(`Ошибка: ${data.message}`);
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Ошибка при регистрации. Попробуйте позже.');
        });
}
