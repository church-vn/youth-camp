document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (e) {
    // Не мешаем обычной отправке (в Google Таблицу и т.д.)
    setTimeout(() => {
      sendTelegramMessage();
    }, 1000); // задержка на всякий случай
  });

  function sendTelegramMessage() {
    const token = "7610624510:AAGt4QFSKDfnjf9k9YhCb2OsjiuTRuQ9-JA";
    const chatId = "-1002575821012";

    // Собираем значения
    const secondName = document.getElementById("sendSecondName_camp").value;
    const name = document.getElementById("sendName_camp").value;
    const middleName = document.getElementById("sendMiddleName_camp").value;
    const age = document.getElementById("sendAge_camp").value;
    const birthDate = document.getElementById("birthDate_camp").value;
    const city = document.getElementById("sendCity_camp").value;
    const church = document.getElementById("sendChurch_camp").value;
    const pastorName = document.getElementById("sendPastorName_camp").value;
    const contraindications = document.getElementById("sendContraindications_camp").value;
    const medication = document.getElementById("sendMedication_camp").value;
    const parent1 = document.getElementById("sendParent1Name_camp").value;
    const phone1 = document.getElementById("sendParent1Phone_camp").value;
    const email1 = document.getElementById('sendEmail_camp1').value;
    const parent2 = document.getElementById("sendParent2Name_camp").value;
    const phone2 = document.getElementById("sendParent2Phone_camp").value;
    const email2 = document.getElementById('sendEmail_camp2').value;


    const message = `
🆕 Новая заявка на участие в лагере:

👪 Фамилия: ${secondName}
👦 Имя: ${name}
👤 Отчество: ${middleName}
📅 Возраст: ${age}
🎂 Дата рождения: ${birthDate}
🏙️ Город: ${city}
⛪ Церковь: ${church}
👨‍✝️ ФИО пастора: ${pastorName}
⚠️ Противопоказания: ${contraindications}
💊 Прием лекарств: ${medication}

👨‍👩‍👧 Родитель 1: ${parent1}
📞 Телефон 1: <a href="tel:${phone1}">${phone1}</a>
✉️ Email: ${email1}

👨‍👩‍👧 Родитель 2: ${parent2}
📞 Телефон 2: <a href="tel:${phone2}">${phone2}</a>
✉️ Email: ${email2}

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
