const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const spinner = $(".spinner");
if (document.body.clientWidth > document.body.clientHeight) {
    spinner.classList.add('spin2')
}

else {
    spinner.classList.add('spin')
}

const btn_toggle = $(".btn-toggle");
const container = $(".container");
let toggle = 'dark';
btn_toggle.addEventListener("click", function () {
    if (toggle == 'dark') {
        container.classList.add('light');
        document.documentElement.style.setProperty('--color-btn-toggle', '#000');
        toggle = 'light';
    }
    else {
        container.classList.remove('light');
        document.documentElement.style.setProperty('--color-btn-toggle', '#fff');
        toggle = 'dark';
    }
});