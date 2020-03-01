document.querySelector('.mobile__button').addEventListener('click', (e) => {
    const menu = document.querySelector('.header__nav');
    const contact = document.querySelector('.header__contact');
    menu.classList.add('header__nav-active');
    contact.classList.add('header__contact_active');
});

document.querySelector('.mobile__menu-close').addEventListener('click', (e) => {
    const menu = document.querySelector('.header__nav');
    const contact = document.querySelector('.header__contact');
    menu.classList.remove('header__nav-active');
    contact.classList.remove('header__contact_active');
});