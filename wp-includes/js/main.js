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
        sendParent2Phone
    );
}

// Функция для блокировки прокрутки
function lockScroll() {
    document.body.classList.add('lock-scroll');
}

// Функция для разблокировки прокрутки
function unlockScroll() {
    document.body.classList.remove('lock-scroll');
}

// Проверяем, существуют ли элементы, прежде чем вешать обработчики событий
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

if (closePopupButtonSubmit_camp) {
    closePopupButtonSubmit_camp.addEventListener('click', () => {
        if (checkFormValidity() && popupBg_camp && popup_camp) {
            popupBg_camp.classList.remove('active');
            popup_camp.classList.remove('active');
            unlockScroll();
        }
    });
}
