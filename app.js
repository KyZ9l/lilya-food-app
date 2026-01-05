// Инициализируем Telegram WebApp
let tg = window.Telegram.WebApp;

// Говорим Телеграму, что приложение готово к работе
tg.ready();

// Расширяем приложение на весь экран для красоты
tg.expand();

// Основной цвет кнопок из темы пользователя
let mainButtonColor = tg.themeParams.button_color || '#3390ec';
let mainButtonTextColor = tg.themeParams.button_text_color || '#ffffff';

// Функция, которая срабатывает при нажатии кнопки "Купить"
// Сейчас это ПРОТОТИП. На следующем этапе мы заменим это на вызов Prodamus.
function buyProduct(productId) {
    console.log('Пользователь хочет купить товар:', productId);

    // Демонстрация того, что приложение работает и реагирует
    tg.showPopup({
        title: 'Тестовая покупка',
        message: `Вы выбрали товар ID: ${productId}. На следующем этапе здесь откроется оплата Prodamus.`,
        buttons: [
            {id: 'ok', type: 'ok', text: 'Понятно'}
        ]
    });

    // В будущем здесь будет код отправки данных боту:
    // tg.sendData(JSON.stringify({action: 'buy', product: productId}));
}