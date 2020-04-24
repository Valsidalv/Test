const btnMail = document.querySelector('.navbar_btnMail');
const btnTel = document.querySelector('.navbar_btnTel');
const divMail = document.querySelector('.form-register_mail');
const divTel = document.querySelector('.form-register_tel');
const terms = document.querySelector('#terms');
const form = document.querySelector('.form-register');
const loader = document.querySelector('#loader');
const info = document.querySelector('.form-register_info');
const telInput = document.querySelector('#tel');
const mailInput = document.querySelector('#mail');
const currency = document.getElementsByName('currency');


btnMail.addEventListener('click', (e) => {
    divMail.classList.remove('hide');
    divTel.classList.add('hide');

    mailInput.setAttribute('required', '');
    telInput.removeAttribute('required');
});

btnTel.addEventListener('click', (e) => {
    divTel.classList.remove('hide');
    divMail.classList.add('hide');

    mailInput.removeAttribute('required');
    telInput.setAttribute('required', "");
});

terms.addEventListener('click', (e) => {
    if (e.target.checked) {
        sub.disabled = false;
    } else {
        sub.disabled = true;
    }
});


form.addEventListener('submit', (e) => {
    e.preventDefault();

    loader.style.display = 'block';

    let currencyValue = '';

    for (var i = 0; i < currency.length; i++) {
        if (currency[i].checked) {
            currencyValue = currency[i].value;
            break;
        }
    }

    localStorage.setItem('phone', telInput.value);
    localStorage.setItem('mail', mailInput.value);
    localStorage.setItem('currency', currencyValue);
    form.style.display = 'none';

    setTimeout(() => {
        loader.style.display = 'none';
        info.style.display = 'block';
        form.reset();
    }, 2000);

    setTimeout(() => {
        info.style.display = 'none';
        form.style.display = 'block';
    }, 4000);
});