// popup форма для отправки заявки

// popup
let popupBg_camp = document.querySelector('.popup__bg_camp');
let popup_camp = document.querySelector('.popup_camp');
let openPopupButtons_camp = document.querySelectorAll('.open-popup_camp'); 
let closePopupButton_camp = document.querySelector('.close-popup_camp'); 
let closePopupButtonSubmit_camp = document.querySelector('.close_through_submit_camp');



// Проверка на заполненность полей
function checkFormValidity() {
    let sendName = document.getElementById('sendName_camp')?.value.trim() || "";
    let sendMiddleName = document.getElementById('sendMiddleName_camp')?.value.trim() || "";
    let sendSecondName = document.getElementById('sendSecondName_camp')?.value.trim() || "";
    let sendAge = document.getElementById('sendAge_camp')?.value.trim() || "";
    let birthDate = document.getElementById('birthDate_camp')?.value.trim() || "";
    let sendCity = document.getElementById('sendCity_camp')?.value.trim() || "";
    let sendChurch = document.getElementById('sendChurch_camp')?.value.trim() || "";
    let sendPastorName = document.getElementById('sendPastorName_camp')?.value.trim() || "";
    let sendContraindications = document.getElementById('sendContraindications_camp')?.value.trim() || "";
    let sendMedication = document.getElementById('sendMedication_camp')?.value.trim() || "";
    let sendParent1Name = document.getElementById('sendParent1Name_camp')?.value.trim() || "";
    let sendParent1Phone = document.getElementById('sendParent1Phone_camp')?.value.trim() || "";
    let sendParent2Name = document.getElementById('sendParent2Name_camp')?.value.trim() || "";
    let sendParent2Phone = document.getElementById('sendParent2Phone_camp')?.value.trim() || "";
    let sendEmail1 = document.getElementById('sendEmail_camp1')?.value.trim() || "";
    let sendEmail2 = document.getElementById('sendEmail_camp2')?.value.trim() || "";

        // Проверка на валидность email
    let email1Valid = validateEmail(sendEmail1);
    let email2Valid = validateEmail(sendEmail2);


    // Проверка на валидность email и пустое значение
    if (!sendEmail1) {
        document.getElementById('sendEmail_camp1').setCustomValidity("Пожалуйста, введите email.");
    } else if (!email1Valid) {
        document.getElementById('sendEmail_camp1').setCustomValidity("Пожалуйста, введите корректный email.");
    } else {
        document.getElementById('sendEmail_camp1').setCustomValidity("");
    }

    if (!sendEmail2) {
        document.getElementById('sendEmail_camp2').setCustomValidity("Пожалуйста, введите email.");
    } else if (!email2Valid) {
        document.getElementById('sendEmail_camp2').setCustomValidity("Пожалуйста, введите корректный email.");
    } else {
        document.getElementById('sendEmail_camp2').setCustomValidity("");
    }


    return (
        sendName &&
        sendMiddleName &&
        sendSecondName &&
        sendAge &&
        birthDate &&
        sendCity &&
        sendChurch &&
        sendPastorName &&
        sendContraindications &&
        sendMedication &&
        sendParent1Name &&
        sendParent1Phone &&
        sendParent2Name &&
        sendParent2Phone &&
        sendEmail1 && sendEmail2 &&
        email1Valid && email2Valid
    );
}

// Функция для валидации email
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Функция для блокировки прокрутки
function lockScroll() {
    document.body.classList.add('lock-scroll');
}

// Функция для разблокировки прокрутки
function unlockScroll() {
    document.body.classList.remove('lock-scroll');
}

// Преобразование даты
function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // месяцы начинаются с 0
    const year = date.getFullYear();
    return `${day}.${month}.${year}`; // формат DD.MM.YYYY
}

// Функция показа загрузочного pop-up на 5 секунд
function showLoadingPopup() {
    const loading = document.getElementById('loadingPopup');
    loading.style.display = 'block';

    setTimeout(() => {
        loading.style.display = 'none';
    }, 7000); // 7 секунд
}

// Функция для показа pop-up
function showMainregPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'block';

    popup.querySelector('.mainreg-popup-close-btn').addEventListener('click', () => {
        popup.style.display = 'none';
    });

    setTimeout(() => {
        popup.style.display = 'none';
    }, 15000);
}

// Открытие и закрытие попапа
if (openPopupButtons_camp) {
    openPopupButtons_camp.forEach((button) => { 
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (popupBg_camp && popup_camp) {
                popupBg_camp.classList.add('active');
                popup_camp.classList.add('active');
                lockScroll();
            }
        });
    });
}

if (closePopupButton_camp) {
    closePopupButton_camp.addEventListener('click', () => {
        if (popupBg_camp && popup_camp) {
            popupBg_camp.classList.remove('active');
            popup_camp.classList.remove('active');
            unlockScroll();
        }
    });
}

document.addEventListener('click', (e) => {
    if (popupBg_camp && e.target === popupBg_camp) {
        popupBg_camp.classList.remove('active');
        popup_camp.classList.remove('active');
        unlockScroll();
    }
});

// Закрытие попапа через кнопку отправки формы
if (closePopupButtonSubmit_camp) {
    closePopupButtonSubmit_camp.addEventListener('click', () => {
        if (checkFormValidity() && popupBg_camp && popup_camp) {
            popupBg_camp.classList.remove('active');
            popup_camp.classList.remove('active');
            unlockScroll();
        }
    });
}

// Отправка формы
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();


  if (!checkFormValidity()) {
        // Если форма невалидна, не закрываем попап и не отправляем данные
        return;
    }

    
    showLoadingPopup();

    const formData = {
        secondName: document.getElementById('sendSecondName_camp').value,
        name: document.getElementById('sendName_camp').value,
        middleName: document.getElementById('sendMiddleName_camp').value,
        age: document.getElementById('sendAge_camp').value,
        birthDate: formatDate(document.getElementById('birthDate_camp').value),
        city: document.getElementById('sendCity_camp').value,
        church: document.getElementById('sendChurch_camp').value,
        pastorName: document.getElementById('sendPastorName_camp').value,
        contraindications: document.getElementById('sendContraindications_camp').value,
        medication: document.getElementById('sendMedication_camp').value,
        parent1Name: document.getElementById('sendParent1Name_camp').value,
        parent1Phone: document.getElementById('sendParent1Phone_camp').value.replace(/\D/g, ''),
        email1: document.getElementById('sendEmail_camp1').value,
        parent2Name: document.getElementById('sendParent2Name_camp').value,
        parent2Phone: document.getElementById('sendParent2Phone_camp').value.replace(/\D/g, ''),
        email2: document.getElementById('sendEmail_camp2').value,
        additionalInfo: document.getElementById('sendAdditionalInfo_camp').value
    };

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxwk0q5jlhe9NeeGS0sRUBpFKXtb4evIeVmq_8h_hy5Sg95Q9GoWTzpzepv1TXunJKz/exec';

    console.log(formData); // Добавьте логирование для проверки отправляемых данных

    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        showMainregPopup('mainregSuccessPopup');
        document.getElementById('registrationForm').reset(); // Сброс формы после отправки
    })
    .catch(error => {
        console.error('Ошибка:', error);
        showMainregPopup('mainregErrorPopup');
    });
});