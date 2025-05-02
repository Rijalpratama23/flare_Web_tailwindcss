const hamburger = document.querySelector('.hamburger');
const linkNavigasi = document.querySelector('.linkNavigasi');

hamburger.addEventListener('click', () => {
    let src = (hamburger.src.includes('hamburger')) ? 'img/icon-close.svg' : 'img/icon-hamburger.svg';

    hamburger.src = src;

    linkNavigasi.classList.toggle('hidden');
    linkNavigasi.classList.toggle('flex');
})