<?php
// Подключение к базе данных
$host = 'localhost';
$dbname = 'your_database_name';
$username = 'your_username';
$password = 'your_password';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Ошибка подключения к базе данных']);
    exit;
}

// Получение данных из запроса
$data = json_decode(file_get_contents('php://input'), true);
$name = htmlspecialchars($data['name']);
$phone = htmlspecialchars($data['phone']);
$password = password_hash($data['password'], PASSWORD_BCRYPT); // Шифруем пароль

// Проверка на существование номера телефона
$stmt = $pdo->prepare("SELECT * FROM users WHERE phone = ?");
$stmt->execute([$phone]);

if ($stmt->rowCount() > 0) {
    echo json_encode(['success' => false, 'message' => 'Этот номер телефона уже зарегистрирован']);
    exit;
}

// Вставка нового пользователя
$stmt = $pdo->prepare("INSERT INTO users (name, phone, password) VALUES (?, ?, ?)");
if ($stmt->execute([$name, $phone, $password])) {
    echo json_encode(['success' => true, 'message' => 'Пользователь успешно зарегистрирован']);
} else {
    echo json_encode(['success' => false, 'message' => 'Ошибка при регистрации']);
}
