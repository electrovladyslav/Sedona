var formBody = document.querySelector('.search-form-body');
var form = formBody.querySelector('form');
var formBtn = document.querySelector('.search-form-call');
var dateEnter = form.querySelector('input[name=date-enter]');
var dateExit = form.querySelector('input[name=date-exit]');
var increaseBtn = form.querySelectorAll('.icon-plus');
var decreaseBtn = form.querySelectorAll('.icon-minus');
var formShowState = localStorage.getItem('formShowState');
var dateEnterStored = localStorage.getItem('dateEnter');
var dateExitStored = localStorage.getItem('dateExit');

//показать форму, если она была показана в последний визит
if (formShowState)
    formBody.classList.toggle('show');

//заполним даты из localStorage
if (dateEnterStored)
    dateEnter.value = dateEnterStored;

if (dateExitStored)
    dateExit.value = dateExitStored;

// показать/скрыть форму по нажатию на кнопку
formBtn.addEventListener('click', function  (event) {
    event.preventDefault();

    formBody.classList.toggle('show');
    //сохранить состояние в localStorage
    if (formBody.classList.contains('show')) 
        localStorage.setItem('formShowState', 'true')
    else
        localStorage.removeItem('formShowState');
});

//сделаем кнопки интерактивными
for (var i = 0; i < increaseBtn.length; i++) {
    (function (i) {
        // кнопка плюс
        increaseBtn[i].addEventListener('click', function  (event) {
                event.preventDefault();
                increaseBtn[i].previousElementSibling.value ++;
        });

        // кнопка минус
        decreaseBtn[i].addEventListener('click', function  (event) {
            event.preventDefault();
            var inputVal = decreaseBtn[i].nextElementSibling.value;
            inputVal --;
            if (inputVal < 0) 
                inputVal = 0;
            decreaseBtn[i].nextElementSibling.value = inputVal;
        });
    })(i);
};

//проверка на заполнение
form.addEventListener('submit', function (event) {
    if (!(dateEnter.value && dateExit.value)){
        event.preventDefault();
        
        if (!dateEnter.value) {
            dateEnter.style.border = '1px solid red'
            alert('Введите дату заезда');
        } else {
            dateEnter.style.border = '';

            if (!dateExit.value) {
                dateExit.style.border = '1px solid red'
                alert('Введите дату выезда');
            } else 
                dateExit.style.border = '';
        }
    //если всё ок, сохраним даты в localStorage
    } else {
        localStorage.setItem('dateEnter',dateEnter.value);
        localStorage.setItem('dateExit',dateExit.value);
    }


})



