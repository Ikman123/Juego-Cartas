const tarjetas = document.querySelectorAll('.elem');

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('elem-vuelta');
});
});
