// Обработка кнопки выбора метода оплаты
document.getElementById('paymentButton').addEventListener('click', function() {
    document.getElementById('paymentOptions').style.display = 'block';
  });
  
  // При нажатии на кнопку "Оплатить через Telegram"
  document.getElementById('payWithTelegram').addEventListener('click', function() {
    window.location.href = "http://t.me/Rysi4ept";  // Ссылка на ваш Telegram
  });
  
  // При нажатии на кнопку "Оплатить через Каспий Банк"
  document.getElementById('payWithKaspiy').addEventListener('click', function() {
    alert("Скопируйте мой номер карты: 1234 5678 9876 5432. Нажмите 'На сайт банка', чтобы перейти.");
    window.location.href = "https://kaspi.kz";  // Ссылка на сайт банка
  });
  
  // Обработка отправки формы
  document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var order = document.getElementById('order').value;
    alert("Заказ принят! Спасибо за вашу заявку.");
    // Здесь можно добавить код для отправки данных в Google Таблицу или Firebase
  });
  