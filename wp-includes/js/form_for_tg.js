
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (e) {
    // Не мешаем обычной отправке (в Google Таблицу и т.д.)
    setTimeout(() => {
      sendTelegramMessage();
    }, 1000); // задержка на всякий случай
  });

  function sendTelegramMessage() {
    const token = "7610624510:AAGt4QFSKDfnjf9k9YhCb2OsjiuTRuQ9-JA"; // Замените сюда
    const chatId = "-4947131625";  // Замените сюда

    // Собираем значения
    const name = document.getElementById("sendName_camp").value;
    const secondName = document.getElementById("sendSecondName_camp").value;
    const age = document.getElementById("sendAge_camp").value;
    const city = document.getElementById("sendCity_camp").value;
    const church = document.getElementById("sendChurch_camp").value;
    const parent1 = document.getElementById("sendParent1Name_camp").value;
    const phone1 = document.getElementById("sendParent1Phone_camp").value;

    const message = `
🆕 Новая заявка на участие в лагере:

👦 Имя: ${name}
👪 Фамилия: ${secondName}
📅 Возраст: ${age}
🏙️ Город: ${city}
⛪ Церковь: ${church}
👨‍👩‍👧 Родитель 1: ${parent1}
📞 Телефон родителя: <a href="tel:${phone1}">${phone1}</a>
    `;

    // Отправка в Telegram
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML"
      })
    });
  }
});
